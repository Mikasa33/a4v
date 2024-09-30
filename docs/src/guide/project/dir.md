# 目录说明

项目使用 Monorepo 管理，项目结构如下：

```bash
.
├── .husky # husky 配置
├── .vscode # vscode 配置
├── apps # 项目应用目录
│   ├── backend-mock # 后端模拟服务应用
│   └── web # 基于 Naive UI 的前端应用
├── docs # 项目文档
├── packages # 项目子包目录
│   ├── commitline-config # commitlint 配置
│   ├── components # 组件
│   ├── eslint-config # eslint 配置
│   ├── hooks # 组合式 API
│   ├── preference  # 偏好设置
│   ├── stylelint-config # stylelint 配置
│   ├── tsconfig # typescript 配置
│   ├── types # 类型定义
│   └── utils # 工具
├── scripts # 项目脚本目录
├── .editorconfig # 编辑器配置文件
├── .gitignore # git 忽略文件
├── .npmrc # npm 配置文件
├── .stylelintignore # stylelint 忽略文件
├── .commitlint.config.cjs # commitlint 配置文件
├── cspell.json # cspell 配置文件
├── eslint.config.js # eslint 配置文件
├── lint-staged.config.js # lint-staged 配置文件
├── package.json # 项目依赖配置文件
├── pnpm-lock.yaml # pnpm 锁文件
├── pnpm-workspace.yaml # pnpm 工作区配置文件
├── README.md # 项目说明文档
├── stylelint.config.js # stylelint 配置文件
└── uno.config.ts # UnoCSS 配置文件
```
