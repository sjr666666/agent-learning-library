const n=`MiniCode 是一个面向本地开发工作流的轻量级终端编码助手。它不追求成为一个庞大的"编码代理平台"，而是用更小的实现体量，还原 Claude Code 式的工作流体验与核心架构思路——这让它尤其适合学习、实验和二次定制。本文从设计哲学出发，带你建立对 MiniCode 整体架构的认知地图，为后续深入各模块打下基础。

## MiniCode 是什么

MiniCode 的核心是一套 **terminal-first agent loop**（终端优先的代理循环）：接收用户请求 → 检查当前工作区 → 在需要时调用工具 → 修改文件前先审阅 → 在同一个终端会话中返回最终结果。整个项目有意保持紧凑，让主控制流、工具模型和 TUI 行为都容易被理解和扩展。

Sources: [README.md](README.md#L32-L40)

它可以运行在两种形态下：**全屏交互 TUI**（默认，支持输入历史、transcript 滚动、斜杠命令菜单和审批流程），以及**非交互回退模式**（当标准输入输出不是 TTY 时的简单 readline 界面）。入口逻辑在 \`src/index.ts\` 中根据 \`process.stdin.isTTY\` 判断选择哪条路径。

Sources: [src/index.ts](src/index.ts#L57-L102)

MiniCode 适合你，如果你想要：

| 你的需求 | MiniCode 的答案 |
|---|---|
| 轻量级 coding assistant，而非庞大平台 | 仅 2 个运行时依赖（\`diff\`、\`zod\`），TypeScript 源码约 1.4 万行 |
| 带 tool calling、transcript 和命令工作流的终端 UI | 全屏 TUI + 26+ 个斜杠命令 + 本地工具快捷指令 |
| 适合阅读和二次开发的小代码库 | 模块边界清晰，每个核心概念对应一个独立文件 |
| 类 Claude Code 架构的参考实现 | 完整覆盖代理循环、工具协议、权限、上下文管理、会话持久化 |

Sources: [package.json](package.json#L16-L27)

## 设计哲学：为速度而生，为简洁而建

README 与架构文档共同勾勒出 MiniCode 的三条设计哲学：

**第一，不追求"大而全"。** 项目的目标不是构建一个巨型的一体化终端代理平台，而是优先做好最有价值的执行循环、交互体验和安全边界。Claude Code 生态中的插件市场、远程会话、任务集群等高级能力被明确列在"未计划/未构建"清单中。

Sources: [ARCHITECTURE.md](ARCHITECTURE.md#L6-L19)

**第二，保持骨架清晰。** 当前实现聚焦于六件事，这也是整个代码库的组织原则：

1. 保持 \`model -> tool -> model\` 循环的骨架
2. 保持统一工具契约与集中注册
3. 保持消息驱动的终端交互节奏
4. 保持安全边界：路径权限、命令权限、写入审批
5. 保持 Claude Code 启发的扩展点：本地 skills 和 MCP 工具
6. 保持长会话可用性：追加式会话历史、压缩边界、供应商用量记账、大输出落盘、确定性裁剪与上下文折叠投影

Sources: [ARCHITECTURE.md](ARCHITECTURE.md#L22-L27)

**第三，为学习而生。** 用更小的实现交付 Claude Code 级别的行为和架构思想，意味着你可以在一两个文件内读完全部核心流程，而不是在数千个模块中迷路。这是 MiniCode 区别于大型代理框架最根本的设计取舍。

## 核心架构总览

下面这张图展示了 MiniCode 运行时的主要模块和它们之间的协作关系。整条链路可以概括为：**用户在终端输入 → TUI 捕获 → 代理循环驱动模型与工具交替执行 → 上下文与权限系统在旁护航 → 会话日志落盘**。

\`\`\`mermaid
flowchart TB
    subgraph UserLayer["用户层"]
        User["用户"]
        TTY["全屏 TUI<br/>src/tty-app.ts + src/tui/*"]
        FALLBACK["非交互回退<br/>src/index.ts readline 模式"]
    end

    subgraph CoreLayer["核心执行层"]
        LOOP["代理循环<br/>src/agent-loop.ts<br/>model → tool → model"]
        ADAPTER["模型适配器<br/>AnthropicAdapter / MockModelAdapter"]
        REGISTRY["ToolRegistry<br/>统一工具协议 src/tool.ts"]
        TOOLS["12 个内置工具<br/>src/tools/*"]
        MCP["MCP 外部工具<br/>src/mcp.ts"]
    end

    subgraph GuardLayer["护航层"]
        PERM["三层权限系统<br/>src/permissions.ts"]
        REVIEW["写前审阅 + diff<br/>src/file-review.ts"]
        CTX["上下文管理<br/>token 记账 / 自动压缩 /<br/>折叠投影 / 微压缩 / 大结果落盘"]
    end

    subgraph PersistLayer["持久化层"]
        SESSION["会话 JSONL 日志<br/>src/session.ts"]
        CONFIG["配置体系<br/>settings.json / mcp.json<br/>src/config.ts"]
    end

    User --> TTY
    User --> FALLBACK
    TTY --> LOOP
    FALLBACK --> LOOP
    LOOP --> ADAPTER
    ADAPTER -->|工具调用请求| REGISTRY
    REGISTRY --> TOOLS
    REGISTRY --> MCP
    LOOP --> PERM
    PERM --> REVIEW
    LOOP --> CTX
    LOOP --> SESSION
    TTY --> CONFIG
    LOOP --> CONFIG
\`\`\`

各模块一句话定位：\`agent-loop.ts\` 是多步执行的大脑；\`tool.ts\` 定义了所有工具的"统一接口"；\`permissions.ts\` 与 \`file-review.ts\` 构成安全边界；\`compact/\` 目录解决长会话的上下文膨胀问题；\`session.ts\` 让每次会话可保存、可恢复、可分叉。

Sources: [ARCHITECTURE.md](ARCHITECTURE.md#L38-L73)

## 五大设计支柱

### 支柱一：model → tool → model 代理循环

\`runAgentTurn\`（约 460 行）是 MiniCode 的引擎核心。它在一个循环中反复执行：把当前消息列表交给模型 → 模型返回 \`AgentStep\`（最终回答或工具调用列表）→ 若是工具调用则依次执行并回填结果 → 带着新消息进入下一轮，直到模型给出最终回答或达到步数上限。

Sources: [src/agent-loop.ts](src/agent-loop.ts#L112-L174)

循环中有几处值得注意的韧性设计：

- **空响应重试**：模型返回空内容时最多重试 2 次，并注入明确的"继续"提示词。
- **思考中断恢复**：当模型因 \`pause_turn\` 或 \`max_tokens\` 在 thinking 阶段中断时，自动追加续写提示，最多恢复 3 次。
- **工具错误计数**：回合内累计工具报错，在最终的空响应兜底文案中反馈给用户。
- **ask_user 中断**：如果某个工具请求用户澄清（\`awaitUser\`），则立即结束当前回合，把问题呈现给用户。

Sources: [src/agent-loop.ts](src/agent-loop.ts#L263-L339)

模型的多样性通过 \`ModelAdapter\` 接口抽象：\`AnthropicModelAdapter\` 负责真实 API 调用（含指数退避重试、限流响应、thinking 块保留），\`MockModelAdapter\` 则提供离线演示能力——设置 \`MINI_CODE_MODEL_MODE=mock\` 即可在无网络、无 API Key 的情况下体验完整的工具调用流程。

Sources: [src/index.ts](src/index.ts#L82-L85), [src/mock-model.ts](src/mock-model.ts#L24-L180)

### 支柱二：统一工具协议

所有工具——无论是内置的、本地 skills 加载的，还是远程 MCP 注入的——都遵循同一个 \`ToolDefinition\` 契约：\`name\`（名称）、\`description\`（描述）、\`inputSchema\`/\`schema\`（zod 校验器）、\`run(input, context)\`（执行函数）。\`ToolRegistry\` 负责集中注册、查找和执行，并在执行前用 zod 做输入校验，把不合法的调用拦截在工具逻辑之外。

Sources: [src/tool.ts](src/tool.ts#L27-L38), [src/tool.ts](src/tool.ts#L95-L127)

启动时，\`createDefaultToolRegistry\` 会注册 12 个内置工具：

| 工具 | 用途 | 实现文件 |
|---|---|---|
| \`list_files\` | 列出工作区目录内容 | src/tools/list-files.ts |
| \`grep_files\` | 按模式搜索文件内容 | src/tools/grep-files.ts |
| \`read_file\` | 读取文件 | src/tools/read-file.ts |
| \`write_file\` | 写入文件 | src/tools/write-file.ts |
| \`modify_file\` | 替换文件（先展示可审阅的 diff） | src/tools/modify-file.ts |
| \`edit_file\` | 按"查找→替换"精确编辑 | src/tools/edit-file.ts |
| \`patch_file\` | 补丁式修改 | src/tools/patch-file.ts |
| \`run_command\` | 从允许列表执行开发命令 | src/tools/run-command.ts |
| \`ask_user\` | 向用户提出澄清问题 | src/tools/ask-user.ts |
| \`load_skill\` | 加载本地 SKILL.md 技能 | src/tools/load-skill.ts |
| \`web_fetch\` | 抓取网页内容 | src/tools/web-fetch.ts |
| \`web_search\` | 网页搜索（可限定域名） | src/tools/web-search.ts |

Sources: [src/tools/index.ts](src/tools/index.ts#L42-L61)

工具执行的输出统一为 \`ToolResult { ok, output, backgroundTask?, awaitUser? }\`，让上层（代理循环、TUI）无需关心具体工具的差异。这是"集中式工具架构"的关键：新增一个工具 = 实现一个 \`ToolDefinition\` 并注册，其余系统零改动。

Sources: [src/tool.ts](src/tool.ts#L20-L25)

### 支柱三：安全边界

MiniCode 用三道防线保护你的工作区：

1. **路径权限**：以工作区根目录为基准，维护允许/拒绝的目录前缀与文件模式。
2. **命令权限**：对 \`run_command\` 做命令级审批，并对 \`git reset --hard\`、\`git clean\`、\`npm publish\`、任意代码执行（node/python/bash）等危险操作给出专门的风险提示。
3. **编辑审批**：任何文件写入前都要通过 \`ensureEdit\` 审批。

Sources: [src/permissions.ts](src/permissions.ts#L29-L44), [src/permissions.ts](src/permissions.ts#L70-L110)

审批决策支持 \`allow_once / allow_always / allow_turn / deny_*\` 等多个粒度，持久化在 \`~/.mini-code/permissions.json\`。在文件写入环节，\`file-review.ts\` 用 \`diff\` 库生成统一格式的 diff，先呈现给用户审阅，通过后才真正落盘——这就是"写前审阅"流程。

Sources: [src/file-review.ts](src/file-review.ts#L10-L33), [src/file-review.ts](src/file-review.ts#L48-L70)

### 支柱四：长会话上下文管理

长会话最大的敌人是上下文膨胀。MiniCode 围绕"供应商用量优先"的记账原则构建了一整套分层策略：

| 机制 | 触发条件 | 作用 | 关键文件 |
|---|---|---|---|
| 用量记账 | 每次 assistant 响应 | 供应商上报的 token 数优先；缺失部分用本地估算补齐 | src/utils/token-estimator.ts |
| 微压缩 | 利用率 ≥ 50% | 清理旧工具结果占位 | src/compact/microcompact.ts |
| 上下文折叠投影 | 利用率 ≥ 75% | 识别可摘要区间并替换为模型可见摘要 | src/compact/context-collapse.ts |
| snip 确定性裁剪 | 利用率 ≥ 70% | 安全删除中间历史，保护编辑与错误轮次 | src/compact/snipCompact.ts |
| 自动压缩 | 利用率 ≥ 85% | 调用 LLM 生成摘要并写入压缩边界 | src/compact/auto-compact.ts |
| 大结果落盘 | 单结果 > 5 万字符 | 将完整输出写入磁盘，上下文中只留预览与路径 | src/utils/tool-result-storage.ts |

Sources: [src/compact/constants.ts](src/compact/constants.ts#L1-L33), [src/utils/tool-result-storage.ts](src/utils/tool-result-storage.ts#L13-L17)

每一层都带失败熔断（连续失败自动禁用），确保上下文管理本身不会成为新的故障源。这套系统是长会话可用的根基，也是后续"Deep Dive"章节的核心内容。

Sources: [src/compact/auto-compact.ts](src/compact/auto-compact.ts#L49-L83)

### 支柱五：会话持久化

会话以**追加式 JSONL 事件日志**存储在 \`~/.mini-code/projects/<工作目录>/<sessionId>.jsonl\`。每条事件携带 \`uuid\`、\`parentUuid\`、\`sessionId\`、\`cwd\` 和时间戳，构成一棵可追溯的事件树。基于这套模型，MiniCode 实现了：

- **保存/恢复**：\`loadSession\` 从最近的压缩边界加载消息，同时保留完整事件流用于 transcript 重建。
- **重命名/分叉**：\`forkSession\` 从源会话派生出新会话 ID。
- **过期清理**：\`cleanupExpiredSessions\` 按保留策略回收旧会话。
- **压缩边界**：\`appendCompactBoundary\` 标记摘要历史的分界点。

Sources: [src/session.ts](src/session.ts#L218-L228), [src/session.ts](src/session.ts#L528-L556)

## 技术栈与项目结构

MiniCode 的 TypeScript 主仓库刻意保持极简依赖：

| 类别 | 依赖 | 用途 |
|---|---|---|
| 运行时依赖 | \`diff\` | 生成统一 diff 供写前审阅 |
| 运行时依赖 | \`zod\` | 工具输入的 schema 校验 |
| 开发依赖 | \`tsx\` | 直接运行 TypeScript，无需编译步骤 |
| 开发依赖 | \`typescript\` / \`eslint\` | 类型检查与代码规范 |
| 测试 | Node 内置 \`node:test\` | 24 个测试文件、38 个测试用例，由 test/run-tests.mjs 驱动 |

Sources: [package.json](package.json#L16-L27), [test/run-tests.mjs](test/run-tests.mjs#L1-L33)

源码组织（约 1.4 万行 TypeScript）遵循"一个概念一个文件"的原则：

\`\`\`
src/
├── index.ts            # CLI 入口：交互/非交互分流、装配各模块
├── agent-loop.ts       # 核心：model → tool → model 多步循环
├── tool.ts             # 统一工具契约 + ToolRegistry
├── tools/              # 12 个内置工具
├── anthropic-adapter.ts# Anthropic API 适配（重试/限流/思考块）
├── mock-model.ts       # 离线演示模型
├── permissions.ts      # 三层权限系统
├── file-review.ts      # 写前审阅 + diff 生成
├── session.ts          # JSONL 会话日志（保存/恢复/分叉）
├── memory.ts           # 分层记忆（MINI.md / CLAUDE.md / rules）
├── skills.ts           # SKILL.md 技能发现
├── mcp.ts              # MCP 工具接入（stdio/HTTP）
├── init.ts             # /init 项目脚手架与仓库检测
├── config.ts           # 配置体系（settings/mcp/路径覆盖）
├── compact/            # 上下文管理全家桶（8 个文件）
├── utils/              # token 估算、工具结果落盘、模型上下文
├── tui/                # 终端 UI 组件（chrome/input/screen/...）
└── tty-app.ts          # 全屏 TUI 应用主控（约 2470 行）
\`\`\`

Sources: [ARCHITECTURE.md](ARCHITECTURE.md#L38-L73)

## 多语言版本家族

MiniCode 不只是 TypeScript 项目——它已经形成了一个多语言对照家族，这对学习"同一架构在不同语言中的落地方式"极有价值：

| 语言 | 仓库位置（本仓库 external/） | 定位 |
|---|---|---|
| TypeScript | 本仓库 \`src/\` | 主实现，功能最完整 |
| Rust | \`external/MiniCode-rs\` | Rust 版 |
| Python | \`external/MiniCode-Python\` | Python 版 |
| Go | \`external/MiniCode-go\` | Go 版 |
| Java | \`external/MiniCode4j\` | Java 版 |

Sources: [README.md](README.md#L78-L90)

## 为什么 MiniCode 适合学习

把 MiniCode 当作学习材料，你能在一份小代码库中同时获得：工具调用循环的完整实现、权限审批与文件审阅的安全流程、skills 与 MCP 的轻量扩展机制、前台工具与后台 shell 任务的区分、以及会话恢复/压缩边界/用量记账/大输出落盘如何在一个紧凑运行时中协同。这正是一份"看得完、改得动、跑得起"的 Claude Code 级参考实现。

Sources: [ARCHITECTURE.md](ARCHITECTURE.md#L75-L89)

## 下一步阅读建议

根据知识目录，建议按以下路径继续深入：

1. **动手体验**：先阅读 [快速开始：安装、启动与离线演示模式](2-kuai-su-kai-shi-an-zhuang-qi-dong-yu-chi-xian-yan-shi-mo-shi)，用 \`MINI_CODE_MODEL_MODE=mock\` 离线跑起来，亲身体验工具调用循环。
2. **理解核心执行**：依次阅读 [代理循环：model → tool → model 的多步执行流程](7-dai-li-xun-huan-model-tool-model-de-duo-bu-zhi-xing-liu-cheng) 与 [统一工具协议：注册、Schema 校验与集中执行](8-tong-gong-ju-xie-yi-zhu-ce-schema-xiao-yan-yu-ji-zhong-zhi-xing)，掌握两大支柱的细节。
3. **了解安全与持久化**：阅读 [三层权限系统：路径、命令与编辑审批](17-san-ceng-quan-xian-xi-tong-lu-jing-ming-ling-yu-bian-ji-shen-pi) 和 [追加式 JSONL 事件日志与断点恢复](19-zhui-jia-shi-jsonl-shi-jian-ri-zhi-yu-duan-dian-hui-fu)。
4. **探索扩展机制**：当你想给 MiniCode 加能力时，再看 [技能系统：SKILL.md 的多级发现与加载](21-ji-neng-xi-tong-skill-md-de-duo-ji-fa-xian-yu-jia-zai) 与 [MCP 集成：stdio/HTTP 启动、协议协商与工具注入](22-mcp-ji-cheng-stdio-http-qi-dong-xie-yi-xie-shang-yu-gong-ju-zhu-ru)。
5. **横向对照**：最后阅读 [多语言版本家族：TypeScript/Rust/Python/Go/Java 对照](29-duo-yu-yan-ban-ben-jia-zu-typescript-rust-python-go-java-dui-zhao) 与 [从 Claude Code 设计模式中学习 MiniCode](30-cong-claude-code-she-ji-mo-shi-zhong-xue-xi-minicode)，完成从"能用"到"懂设计"的跨越。`;export{n as default};
