const s=`一个会话文件（\`{sessionId}.jsonl\`）从诞生到消亡，会经历三种生命周期操作：**分叉**（从既有会话复制出独立副本）、**压缩边界**（在事件流中标记历史折叠点）、**过期清理**（按修改时间回收废弃文件）。三者共享同一套 JSONL 事件日志存储，却在语义上互相独立：分叉解决"如何从当前状态另起一条探索路径"，压缩边界解决"加载时如何截断到最新有效上下文"，过期清理解决"磁盘上如何回收无用会话"。本文围绕这三个机制的实现原理与相互约束展开。

Sources: [session.ts](src/session.ts#L22-L59)、[config.ts](src/config.ts#L36-L44)

## 存储地基：按项目隔离的 JSONL 事件日志

三个机制都建立在统一的事件日志模型之上。每个会话是一个追加式 JSONL 文件，存放在按工作目录（cwd）哈希归类的项目目录中：

\`\`\`
~/.mini-code/projects/
└── {projectDirName(cwd)}/        # cwd 中的 / \\ : 替换为 -
    ├── {sessionId}.jsonl          # 会话事件流
    └── ...
\`\`\`

- 项目目录名由 \`projectDirName()\` 对 cwd 做字符净化生成；会话 ID 取 \`randomUUID().slice(0, 8)\`，即 8 位十六进制短 ID。
- 文件中每一行是一条 \`SessionEvent\`，携带 \`uuid\`、\`timestamp\`、\`sessionId\`、\`cwd\`、\`parentUuid\`（物理父子链）与可选的 \`logicalParentUuid\`（逻辑前驱）等字段。
- 事件类型覆盖 \`system/user/assistant/thinking/progress/tool_call/tool_result/summary/compact_boundary/snip_boundary/context_collapse/rename\`——压缩边界与分叉命名都只是事件流中的普通记录，不额外维护索引文件。

这个"一切皆事件"的设计是后文三个机制的共同前提：分叉复制的是事件解码后的消息数组，压缩边界是一条特殊事件，过期清理则直接操作文件系统的 mtime。

Sources: [session.ts](src/session.ts#L20-L59)、[config.ts](src/config.ts#L36-L44)

## 会话分叉：复制有效上下文，生成独立会话

### 触发入口

分叉有两条入口，语义等价：

| 入口 | 形式 | 调用场景 |
|---|---|---|
| TUI 斜杠命令 | \`/fork\` | 交互界面内对当前会话分叉 |
| CLI 启动参数 | \`--fork <session-id>\` | 启动时直接基于指定会话建立新会话 |

TUI 中执行 \`/fork\` 后立即切换当前会话 ID 到新副本，并提示"Session forked. Now in session X. Original session preserved."；CLI 的 \`--fork\` 解析发生在启动参数处理阶段，分叉成功后把 \`resumeTarget\` 指向新 ID，随后直接进入该会话的恢复流程。

Sources: [tty-app.ts](src/tty-app.ts#L1296-L1314)、[index.ts](src/index.ts#L45-L54)、[index.ts](src/index.ts#L112-L120)

### 分叉核心流程

\`forkSession(cwd, sessionId)\` 的实现可以分为四步，可用下图概括：

\`\`\`mermaid
flowchart TD
    A[loadSession 读取源会话] --> B{非空?}
    B -- 否 --> Z[返回 null]
    B -- 是 --> C[生成新 8 位 ID]
    C --> D[saveSession 写入\\n空白 system + 全部消息副本]
    D --> E[listSessions 扫描标题]
    E --> F[计算下一个分叉编号]
    F --> G[renameSession 追加 rename 事件]
    G --> H[返回新 ID]
\`\`\`

具体而言：

1. **读取源消息**：\`loadSession\` 只返回**最后一个 \`compact_boundary\` 之后**的活动消息（见下一节），因此分叉天然继承的是"压缩后的有效上下文"，而非整个历史事件流。
2. **写新文件**：\`saveSession(cwd, newId, [{role:'system', content:''}, ...loaded])\` 以空 system 消息开头、随后追加全部加载消息，生成全新的事件链。新文件中的首个消息事件 \`parentUuid\` 为 \`null\`，之后逐条串联，形成自洽的父链。
3. **命名编号**：分叉标题遵循 \`{原标题}_fork{N}\` 规则。实现先列出全部会话，筛选标题以 \`{baseTitle}_fork\` 为前缀的会话，解析出数字后缀取最大值 +1（无既有分叉则为 1）；源会话无标题时回退为 \`session\`。测试验证连续两次分叉会得到 \`_fork1\`、\`_fork2\`。
4. **写入 rename 事件**：\`renameSession\` 向新文件追加一条 \`rename\` 事件携带标题。由于 \`listSessions\` 提取标题时优先读取 rename 事件、其次才回退到首条 user 消息，分叉标题得以稳定呈现。

Sources: [session.ts](src/session.ts#L528-L554)、[session.ts](src/session.ts#L504-L526)、[session.ts](src/session.ts#L468-L502)、[session.test.ts](test/session.test.ts#L681-L699)、[session.test.ts](test/session.test.ts#L707-L740)

### 分叉后的独立性与去重写入

分叉的关键保证是**两份会话互不影响**：测试 \`forkSession creates independent session — modifications do not affect original\` 验证了向分叉追加消息后，原会话消息数不变。这一独立性来自分叉写入了完整的文件副本，而非引用。

为避免内存中已有的消息在分叉后又被重复写回，TUI 在 \`/fork\` 成功后将 \`args.alreadySavedCount\` 设为 \`args.messages.length - 1\`。\`saveSession\` 的去重逻辑据此工作：消息带 ID 且已存在于文件中则跳过；带 ID 但不存在则写入；无 ID 的消息仅当下标不小于 \`alreadySavedCount\` 时才写入。分叉期间 \`forkSession\` 已把全部消息写入新文件，因此后续保存只会追加**真正的新消息**。

另外，分叉会重置 \`contextCollapseState\`（折叠状态不跨会话继承），保证新会话从干净的折叠视角开始。

Sources: [tty-app.ts](src/tty-app.ts#L1305-L1313)、[session.ts](src/session.ts#L218-L250)、[session.test.ts](test/session.test.ts#L657-L679)

## 压缩边界：事件流中的历史折叠点

### 边界事件的物理/逻辑双链设计

压缩发生时，系统向会话文件追加三类事件：

1. **\`compact_boundary\` 边界事件**：携带 \`compactMetadata: { trigger: 'auto' | 'manual', preTokens, postTokens }\`，记录触发方式与压缩前后令牌数。它的 \`parentUuid\` 显式为 \`null\`，同时 \`logicalParentUuid\` 指向压缩前最后一条事件。
2. **摘要事件**：一条 \`type: 'user'\` 的消息，内容是模型生成的上下文摘要，其 \`parentUuid\` 指向边界事件。
3. **保留消息**：压缩后仍活跃的消息，按顺序接在摘要之后，逐条串联 parentUuid。

\`\`\`mermaid
sequenceDiagram
    participant E as 压缩前最后事件
    participant B as compact_boundary
    participant S as 摘要(user)
    participant R as 保留消息们
    Note over B: parentUuid = null<br/>logicalParentUuid = E.uuid
    Note over S: parentUuid = B.uuid
    Note over R: 链式 parentUuid
\`\`\`

这种"物理断链 + 逻辑指向前驱"的设计刻意制造了一个断裂点：\`parentUuid\` 为空意味着边界之前的事件在**消息树上不可达**，而 \`logicalParentUuid\` 保留了"边界紧接在哪条事件之后"的时序信息，供审计与调试使用。测试明确断言了 \`compact_boundary\` 的 \`parentUuid\` 为 \`null\`、\`logicalParentUuid\` 指向最后事件、摘要从边界事件接链。

Sources: [session.ts](src/session.ts#L315-L366)、[session.test.ts](test/session.test.ts#L610-L633)

### 边界即加载截断点

\`loadSession\` 加载会话时，从文件尾部向前扫描找到**最后一个** \`compact_boundary\`，然后只读取其之后的事件作为活跃上下文；边界之前的历史（含更早的摘要与旧边界）一律不进入模型上下文。这意味着：

- 多次压缩后，文件仍保留完整的历史事件流（追加式），但每次加载都只取最新边界之后的"有效窗口"。
- \`loadContextCollapseState\` 使用完全相同的边界搜索逻辑，只统计最新边界之后的 \`context_collapse\` 提交区间，保证折叠状态与活跃上下文一致。

\`\`\`mermaid
flowchart LR
    subgraph jsonl[会话文件事件流]
        H1[历史事件...] --> B1[boundary #1]
        B1 --> S1[摘要 #1]
        S1 --> H2[活动事件...]
        H2 --> B2[boundary #2]
        B2 --> S2[摘要 #2]
        S2 --> A[当前活跃窗口]
    end
    B2 -. "扫描到最后一个 boundary" .-> A
    style A fill:#d4edda
\`\`\`

Sources: [session.ts](src/session.ts#L368-L403)、[session.ts](src/session.ts#L405-L438)、[session.test.ts](test/session.test.ts#L334-L357)

### 保留边界的确定与写入时机

压缩时保留哪些消息由 \`findRetentionBoundary\` 决定（详见本系列《[确定性裁剪压缩](13-que-ding-xing-cai-jian-ya-suo-bao-hu-bian-ji-yu-cuo-wu-lun-ci-de-an-quan-shan-chu)》）：从尾部反向累计令牌，超出 \`RETENTION.MAX_KEEP_TOKENS\`（40,000）即停；同时保证至少保留 \`MIN_KEEP_MESSAGES\`（6）条，并将边界对齐到 API 轮次（tool_call/tool_result 组不被拆分）。

边界事件在两条路径上写入：

| 路径 | 触发条件 | trigger 值 | 调用点 |
|---|---|---|---|
| 手动压缩 \`/compact\` | 用户显式发起 | \`manual\` | [tty-app.ts](src/tty-app.ts#L1134-L1182) |
| 自动压缩 | 代理循环 step 0，warningLevel 为 critical/blocked | \`auto\` | [agent-loop.ts](src/agent-loop.ts#L221-L236)、[tty-app.ts](src/tty-app.ts#L1403-L1427) |

两条路径均调用 \`appendCompactBoundary(cwd, sessionId, summaryText, trigger, tokensBefore, tokensAfter, retainedMessages)\`，其中 \`retainedMessages\` 由 \`retainedMessagesAfterCompact()\` 从压缩结果中过滤掉 system 与摘要消息得到——这些消息在边界之后重写为新的活跃事件。写入后，\`alreadySavedCount\` 被更新为新消息数，后续增量保存不会重复。

Sources: [compact.ts](src/compact/compact.ts#L58-L86)、[compact/constants.ts](src/compact/constants.ts#L20-L25)、[tty-app.ts](src/tty-app.ts#L877-L881)、[session.test.ts](test/session.test.ts#L310-L332)

## 过期清理：按 mtime 回收废弃会话

### 清理算法

\`cleanupExpiredSessions(cwd, maxAgeMs)\` 的判定标准是**文件的最后修改时间（mtime）**，而非事件时间戳：

1. 读取项目目录下所有 \`*.jsonl\` 文件。
2. 对每个文件 \`stat\` 获取 mtime，若 \`now - mtime > maxAgeMs\` 则 \`unlink\` 删除，计数 +1。
3. 删除完成后若项目目录已空，递归移除整个项目目录（连同目录本身）。

\`\`\`mermaid
flowchart TD
    A[遍历项目目录 *.jsonl] --> B[stat 获取 mtime]
    B --> C{now - mtime > maxAgeMs?}
    C -- 否 --> D[保留]
    C -- 是 --> E[unlink 删除]
    E --> F{目录已空?}
    F -- 是 --> G[rm 递归删除项目目录]
    F -- 否 --> H[结束]
\`\`\`

选择 mtime 而非事件时间戳的动机在于：mtime 天然反映"最后写入时间"，会话文件每次追加事件都会更新 mtime，因此**活跃会话即使创建于很久以前，只要最近有交互就不会被误删**。测试用 \`utimes\` 把某个会话文件的 mtime 拨到 31 天前，验证 30 天阈值下仅该文件被清除、近期会话原样保留。

Sources: [session.ts](src/session.ts#L556-L594)、[session.test.ts](test/session.test.ts#L742-L762)

### 启动时触发与边界条件

过期清理的唯一内置触发点是 TUI 启动流程：当没有 resume 目标时，以 **30 天**（\`30 * 24 * 60 * 60 * 1000\` ms）为阈值调用清理，若删除数量大于 0 则提示 "Cleaned up N expired session(s) (>30 days old)."。注意该逻辑只在交互式会话启动且未指定恢复目标时执行——正在恢复的会话不会被清理打扰。

此外，\`clearSession\`（删除单个会话）与 \`cleanupExpiredSessions\` 共享"目录空则移除"的收尾逻辑，保证 \`~/.mini-code/projects\` 不会堆积空目录。跨项目视角由 \`listAllProjects\` 提供：它扫描所有项目目录，仅统计含 JSONL 文件的目录，并以各目录内最新 mtime 排序。

Sources: [tty-app.ts](src/tty-app.ts#L1736-L1742)、[session.ts](src/session.ts#L440-L458)、[session.ts](src/session.ts#L602-L640)

## 三者的协作边界与设计权衡

三个机制在共享事件日志之上各自独立，但也存在值得注意的相互作用：

| 维度 | 会话分叉 | 压缩边界 | 过期清理 |
|---|---|---|---|
| 作用对象 | 单个会话 → 新会话 | 单个会话内的事件流 | 项目目录下全部会话 |
| 判定依据 | 消息内容 | 事件类型与 token 统计 | 文件 mtime |
| 对历史事件 | 仅复制有效窗口 | 保留文件内完整历史 | 整文件删除 |
| 持久化副作用 | 新增文件 + rename 事件 | 追加 boundary + summary + 保留消息 | unlink / rm 目录 |

- **分叉与边界的协作**：分叉复制的消息来自 \`loadSession\` 的"边界后窗口"，因此分叉继承的是压缩摘要 + 保留消息，而不是陈旧历史——分叉会话以当前有效上下文为起点。
- **边界与清理的分工**：压缩边界解决的是**逻辑空间**（模型上下文窗口）的回收，历史事件仍留在磁盘；过期清理解决的是**物理空间**的回收，直接删除整个文件。前者保留回溯可能性，后者以磁盘整洁为目标。
- **清理与分叉的边界**：过期清理以 mtime 为准且按项目目录隔离，分叉产生的 \`_forkN\` 会话与其他会话一视同仁——只要 30 天无写入同样会被回收。

总体而言，这套设计遵循"事件日志只增不改"的追加式原则：分叉用新文件表达分支、压缩边界用特殊事件标记折叠、过期清理用文件系统时间做粗粒度回收，三者共同构成了会话持久化层完整而克制的生命周期管理。

Sources: [session.ts](src/session.ts#L528-L554)、[session.ts](src/session.ts#L556-L594)、[session.ts](src/session.ts#L368-L403)

---

**延伸阅读**：本页属于「会话持久化」模块，建议按以下顺序深入——先读 [追加式 JSONL 事件日志与断点恢复](19-zhui-jia-shi-jsonl-shi-jian-ri-zhi-yu-duan-dian-hui-fu) 掌握事件模型基础，再回看 [自动压缩：触发阈值与失败熔断](12-zi-dong-ya-suo-hong-fa-yu-zhi-yu-shi-bai-rong-duan) 与 [确定性裁剪压缩](13-que-ding-xing-cai-jian-ya-suo-bao-hu-bian-ji-yu-cuo-wu-lun-ci-de-an-quan-shan-chu) 理解边界事件的生产端，随后进入 [上下文折叠投影](14-shang-xia-wen-zhe-die-tou-ying-ke-zhai-yao-qu-jian-shi-bie-yu-ti-huan) 了解同类边界机制的对照实现。`;export{s as default};
