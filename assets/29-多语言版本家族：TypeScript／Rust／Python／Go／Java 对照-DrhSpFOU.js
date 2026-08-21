const n=`MiniCode 并不只是一个 TypeScript 项目。主仓库用 TypeScript 实现了功能最完整的版本，同时官方在 \`external/\` 目录下挂载了 **Rust（MiniCode-rs）、Python（MiniCode-Python）、Go（MiniCode-go）、Java（MiniCode4j）** 四个伴生实现。对初学者来说，这个"家族"是学习软件架构最珍贵的教材之一：**同一套设计思路，在五种语言生态中各自落地**。本页将带你看清家族成员、它们共享的架构骨架、跨语言保持一致的行为契约，以及如何利用这份对照来学习。

Sources: [README.zh-CN.md](README.zh-CN.md#L101-L107)

## 家族成员一览

先给出一张家族总表。五个成员共享同一套核心设计（agent loop、工具协议、权限边界、会话持久化），但语言、维护者、完成度各不相同。

| 语言 | 仓库（作者） | 本地位置 | 定位与现状 |
|---|---|---|---|
| **TypeScript** | MiniCode（LiuMengxuan04） | 本仓库 \`src/\` | 主实现，功能最完整，架构参照基准 |
| **Rust** | MiniCode-rs（harkerhand） | \`external/MiniCode-rs\` | 伴生实现，已就绪；重试退避行为与主仓库对齐 |
| **Python** | MiniCode-Python（QUSETIONS） | \`external/MiniCode-Python\` | 伴生实现，已就绪；重试退避行为与主仓库对齐 |
| **Go** | MiniCode-go（ssbsunshengbo） | \`external/MiniCode-go\` | 探索方向，路线图中标注"尚无正式伴生实现" |
| **Java** | MiniCode4j（hobbescalvin414-tech） | \`external/MiniCode4j\`（分支 \`feat/default-ts-ui\`） | 已登记为子模块，按默认 TypeScript UI 思路移植 |

作者信息来自 README 的贡献者表：harkerhand 是 Rust 版本主要作者，QUSETIONS 是 Python 版本主要作者；TypeScript 主仓库则由项目发起者维护。四个伴生仓库通过 \`.gitmodules\` 以 git 子模块形式登记在主仓库的 \`external/\` 下。

Sources: [README.zh-CN.md](README.zh-CN.md#L66-L95) · [.gitmodules](.gitmodules#L1-L12)

## 为什么要有五个语言版本

多语言家族不是一时兴起，而是路线图中明确规划的战略方向。ROADMAP 将"多语言实现分支"列为 P0 级事项，并给出了清晰的定位：

> 目标并不是立刻把主代码库拆散，而是鼓励围绕同一套核心思路，逐步发展语言对应的分支或伴生实现。

路线图同时列出了四条必须被保留的"核心思路"，它们构成了多语言移植的验收标准：

1. **保持轻量架构** —— 任何语言版本都不该膨胀成重型平台；
2. **与 Claude Code 的设计方向保持趋同** —— 借鉴成熟的类 Claude Code runtime 形态；
3. **保持 agent loop 和 tool model 的可读性** —— 这两块是学习价值最高的部分；
4. **让不同语言生态中的学习者受益** —— 这是"多语言"战略的最终目的。

换句话说，多语言版本的存在意义是**教育价值**：一个熟悉 Rust 的开发者不必先学 TypeScript，就能通过 MiniCode-rs 读懂"代理循环 + 工具协议"这一核心设计；反之，TS 主仓库则始终是功能与行为对齐的参照基准。当前完成度并不均衡——路线图明确标注 **Python 与 Rust 伴生实现已就绪，Go 仍为探索方向**。

Sources: [ROADMAP.md](ROADMAP.md#L44-L63) · [ROADMAP_ZH.md](ROADMAP_ZH.md#L44-L63)

## 被复刻的架构骨架

所有语言版本复刻的是同一个架构骨架。先看主仓库（TypeScript）的模块划分——这是理解其他语言版本的地图：

\`\`\`mermaid
flowchart TB
    subgraph Entry["入口与运行时"]
        A["src/index.ts<br/>CLI 入口：参数解析、会话恢复/分叉"]
    end

    subgraph Core["核心执行（契约层）"]
        B["agent-loop.ts<br/>model → tool → model 多步循环"]
        C["types.ts<br/>ChatMessage / ModelAdapter / AgentStep"]
        D["tool.ts<br/>ToolDefinition 注册 / 校验 / 执行"]
    end

    subgraph Adapters["模型适配层"]
        E["anthropic-adapter.ts<br/>Anthropic 兼容 API + 重试退避"]
        F["mock-model.ts<br/>离线演示模式"]
    end

    subgraph Safety["安全与持久化"]
        G["permissions.ts<br/>路径/命令/编辑三层审批"]
        H["session.ts<br/>追加式 JSONL 会话存储"]
        I["compact/<br/>自动压缩、裁剪、上下文折叠、微压缩"]
    end

    subgraph Ext["扩展与界面"]
        J["tools/*<br/>12 个内置工具"]
        K["mcp.ts / skills.ts<br/>MCP 工具与技能发现"]
        L["tui/*<br/>全屏终端界面"]
    end

    A --> B
    B --> C
    B --> D
    B --> E & F
    D --> J
    E --> G
    B --> H
    H --> I
    J --> K
    B --> L
\`\`\`

> **Mermaid 图解读**：图上方是"入口与运行时"，中间是"核心执行（契约层）"——\`agent-loop.ts\` 是循环中枢，它依赖 \`types.ts\` 定义的消息/步骤类型、\`tool.ts\` 定义的工具协议；模型层通过 \`ModelAdapter\` 接口解耦，既可以是 Anthropic 适配器，也可以是离线 Mock；下方是安全、持久化、扩展与界面四大支撑模块。**其他语言的伴生实现，本质上就是把这张图里的每个模块翻译成对应语言。**

这张地图与 ARCHITECTURE.md 中"Current implementation"一节逐条对应：\`src/index.ts\` 是 CLI 入口，\`src/agent-loop.ts\` 是多步工具调用循环，\`src/tool.ts\` 负责工具注册/校验/执行，\`src/tools/*\` 提供 12 个内置工具，\`src/mcp.ts\` 负责 stdio MCP 服务器启动与工具注入，\`src/compact/*\` 提供上下文压缩四件套，\`src/session.ts\` 负责 JSONL 会话持久化。全部 TypeScript 源码约 **1.4 万行**（\`src/\` 下 30 个顶层模块 + 4 个子目录），配套测试 25 个文件约 **4,500 行**——这是"轻量"的量化证据：一个成年人可以在一两天内通读整个主实现。

Sources: [ARCHITECTURE.md](ARCHITECTURE.md#L42-L63) · [src/index.ts](src/index.ts#L28-L60)

## 跨语言保持一致的行为契约

伴生实现不是"长得像"就行，而是要守住一组**行为契约**——这些契约定义了"MiniCode 之所以是 MiniCode"。以下契约均可从 TypeScript 主实现中精确定位，也是对照其他语言版本时的检查清单：

| 契约 | TypeScript 定义位置 | 契约内容 |
|---|---|---|
| **模型接口** | [src/types.ts](src/types.ts#L88-L90) | \`ModelAdapter.next(messages) → AgentStep\`，任何模型适配器（Anthropic / Mock / 其他供应商）都实现这一个接口 |
| **消息角色模型** | [src/types.ts](src/types.ts#L23-L55) | 9 种消息角色：\`system\`、\`user\`、\`assistant_thinking\`、\`assistant\`、\`assistant_progress\`、\`assistant_tool_call\`、\`tool_result\`、\`context_summary\`、\`snip_boundary\` |
| **工具协议** | [src/tool.ts](src/tool.ts#L27-L33) | 每个工具 = \`name + description + inputSchema + schema（校验）+ run(input, context)\` |
| **重试退避** | [src/anthropic-adapter.ts](src/anthropic-adapter.ts#L14-L16) | 默认最多重试 4 次，基础延迟 500ms，上限 8s；对 429 与 5xx 状态码指数退避，优先尊重 \`Retry-After\` 响应头 |
| **会话存储** | [ARCHITECTURE.md](ARCHITECTURE.md#L65-L74) | 按工作目录隔离，\`~/.mini-code/projects/\` 下追加式 JSONL，\`parentUuid\` 树结构 |
| **上下文记账** | [ARCHITECTURE.md](ARCHITECTURE.md#L65-L74) | provider usage 是记账主源，本地估算仅作兜底与尾部估算 |

其中**重试退避**是官方文档明确点名"跨语言对齐"的契约：ROADMAP 在"API retry and backoff"条目下写明——主仓库 Anthropic 适配层对 429、5xx 做有限次重试、指数退避、尊重 \`Retry-After\`，**伴生的 Python 与 Rust 实现与上述行为对齐**。这意味着当你读 MiniCode-Python 或 MiniCode-rs 的网络层时，应该能找到与 [src/anthropic-adapter.ts](src/anthropic-adapter.ts#L50-L75) 等价的逻辑：相同的可重试状态码判定、相同的指数退避公式、相同的 \`Retry-After\` 优先规则。

Sources: [ROADMAP.md](ROADMAP.md#L36) · [ROADMAP_ZH.md](ROADMAP_ZH.md#L36) · [src/anthropic-adapter.ts](src/anthropic-adapter.ts#L50-L75) · [src/types.ts](src/types.ts#L23-L90)

## 各语言版本的现状对照

结合路线图与本地仓库事实，五个版本的成熟度如下：

| 维度 | TypeScript | Rust | Python | Go | Java |
|---|---|---|---|---|---|
| **完成度** | 功能最完整 | 伴生实现已就绪 | 伴生实现已就绪 | 探索方向（无正式伴生实现） | 已登记子模块，按 \`feat/default-ts-ui\` 分支移植 |
| **官方对齐声明** | 参照基准 | 重试退避对齐 | 重试退避对齐 | 未声明 | 未声明 |
| **技术栈线索** | ESM + TypeScript + \`zod\`（Schema 校验）+ \`diff\`（文件审阅） | Rust 生态 | Python 生态 | Go 生态 | JVM / Gradle 生态 |

需要特别说明的是 **Go 版本的身份**：\`external/MiniCode-go\` 已在 \`.gitmodules\` 中登记，README 也将其列为 Go 版本，但 ROADMAP 的正式状态是"Go 尚无正式伴生实现、仍为探索方向"。这一"登记了但未转正"的差异，恰好体现了多语言战略的渐进式路线：先挂靠子模块占位，再逐步补齐实现。

TypeScript 主实现的技术选型值得留意：整个运行时只依赖 \`zod\`（工具输入 Schema 校验）与 \`diff\`（写前审阅的 diff 生成）两个库，其余全部使用 Node 内置模块（\`node:crypto\`、\`node:readline\`、\`node:process\`）。这种"极简依赖"正是"轻量架构"在工程层面的具体体现，也是其他语言版本移植时最容易被对比出差异的地方——不同语言生态对"零依赖"的达成方式完全不同。

Sources: [package.json](package.json#L1-L24) · [.gitmodules](.gitmodules#L1-L12) · [ROADMAP.md](ROADMAP.md#L44-L63)

## 家族目录：external/ 下的子模块布局

在本地仓库中，家族成员通过 git 子模块聚合在 \`external/\` 目录下，与主仓库的 \`src/\` 平级：

\`\`\`
MiniCode（TypeScript 主实现）
└── external/
    ├── MiniCode-rs        # Rust 伴生实现（harkerhand）
    ├── MiniCode-Python    # Python 伴生实现（QUSETIONS）
    ├── MiniCode-go        # Go 版本（ssbsunshengbo）
    └── MiniCode4j         # Java 版本（hobbescalvin414-tech）
\`\`\`

一个需要诚实指出的本地事实：**当前这份仓库快照中，\`external/\` 下的四个子模块目录均为空**——子模块的代码内容并未随快照一起检出。要读取伴生实现的源码，需要先通过 \`git submodule update --init --recursive\` 初始化子模块（或在各自的 GitHub 仓库中直接浏览）。因此，本页所有关于 Rust/Python/Go/Java 版本内部实现的结论，均以主仓库中的官方声明（README、ROADMAP、\`.gitmodules\`）为证据边界，没有对伴生仓库内部代码作推测。

Sources: [.gitmodules](.gitmodules#L1-L12)

## 如何用这份对照学习

对初学者，这份"五语言对照"可以这样用：

1. **先读 TypeScript 主实现**：如果你正在按本 wiki 的顺序学习，此时你应该已经读过 [代理循环：model → tool → model 的多步执行流程](7-dai-li-xun-huan-model-tool-model-de-duo-bu-zhi-xing-liu-cheng) 与 [统一工具协议：注册、Schema 校验与集中执行](8-tong-gong-ju-xie-yi-zhu-ce-schema-xiao-yan-yu-ji-zhong-zhi-xing)，已经知道"契约层"长什么样。
2. **再选你熟悉的语言**：如果你会 Python，就去读 MiniCode-Python 的 agent loop；会 Rust 就读 MiniCode-rs。带着 TypeScript 版的"行为契约清单"去对照——先找 \`ModelAdapter\` 等价物，再找工具注册表，最后找重试退避逻辑。**你不需要读完整个仓库，只需验证三个契约点**：循环中枢是否 \`model → tool → model\`、工具是否 \`name + schema + run\`、重试是否对 429/5xx 指数退避。
3. **回到设计层面**：看完两个语言版本后，你会自然地发现"架构"与"语言"是两个维度——同样的循环结构，在 TypeScript 里是 async/await，在 Rust 里是 tokio 异步运行时，在 Go 里是 goroutine，但**设计模式是一致的**。这正是本页所在章节"工程实践与学习路径"想传达的核心。

## 下一步阅读

- 继续本家族话题的收尾：[从 Claude Code 设计模式中学习 MiniCode](30-cong-claude-code-she-ji-mo-shi-zhong-xue-xi-minicode)（本组最后一页，把 MiniCode 的设计放回 Claude Code 的参照系中审视）。
- 回到工程实践的第一篇：[测试体系：从单元测试到集成回归](28-ce-shi-ti-xi-cong-dan-yuan-ce-shi-dao-ji-cheng-hui-gui)，了解主实现 25 个测试文件覆盖了哪些契约行为——这些测试就是"行为契约"的自动化体现。
- 如果你还没读多语言家族开篇的概览，可在 [项目概览：轻量级终端编码助手的设计哲学](1-xiang-mu-gai-lan-qing-liang-ji-zhong-duan-bian-ma-zhu-shou-de-she-ji-zhe-xue) 中查看家族总表。`;export{n as default};
