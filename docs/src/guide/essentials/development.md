# 本地开发

::: tip 代码获取

如果你还没有获取代码，可以先从 [快速开始](../introduction/quick-start.md) 处开始阅读文档。

:::

## 前置准备

为了更好的开发体验，我们提供了一些工具配置、项目说明，以便于您更好的开发。

### 需要掌握的基础知识

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

- [Pinia](https://pinia.vuejs.org/zh/) - Vue.js 的状态管理库
- [Pnpm](https://pnpm.io/zh/) - 快速、节省磁盘空间的包管理工具
- [Tailwindcss](https://www.tailwindcss.cn/) - 用于快速构建自定义用户界面的实用工具优先的 CSS 框架
- [TypeScript](https://www.typescriptlang.org/zh/) - JavaScript 的超集，为 JavaScript 添加了类型支持
- [UnoCSS](https://unocss.dev/) - 即时按需原子 CSS 引擎
- [Vitejs](https://cn.vitejs.dev/) - 下一代前端构建工具
- [Vitest](https://cn.vitest.dev/) - 轻量、快速的单元测试框架
- [Vue3](https://cn.vuejs.org/) - 渐进式 JavaScript 框架
- [Vue I18n](https://vue-i18n.intlify.dev/) - Vue.js 的国际化插件
- [Vue Router](https://router.vuejs.org/zh/) - Vue.js 的官方路由管理器
- [Naive UI](https://www.naiveui.com/zh-CN) - 一个 Vue 3 组件库

### 工具配置

如果您使用的 IDE 是 [vscode](https://code.visualstudio.com/)（推荐）的话，可以安装以下工具来提高开发效率及代码格式化:

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - 拼写检查
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - 颜色高亮
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件高亮
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 编辑器配置
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码检查
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Git 集成
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 支持
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标支持
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - 样式检查
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - UnoCSS 支持
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 支持

## Npm Scripts

npm 脚本是项目常见的配置，用于执行一些常见的任务，比如启动项目、打包项目等。以下的脚本都可以在项目根目录的 `package.json` 文件中找到。

执行方式为：`pnpm [script]`。

```json
{
  "scripts": {
    // 构建 web 项目
    "build:web": "pnpm --filter a4v-web build",
    // 构建文档项目
    "build:docs": "pnpm --filter a4v-docs build",
    // 删除所有的 node_modules、pnpm-lock.yaml
    "clean": "node ./scripts/clean.js",
    // 检查拼写
    "cspell": "cspell lint **/*.ts **/README.md --no-progress",
    // 生成标准化的 git commit message
    "cz": "czg",
    // 启动 web 项目
    "dev:web": "pnpm --filter a4v-web dev",
    // 启动文档项目
    "dev:docs": "pnpm --filter a4v-docs dev",
    // 检查代码
    "eslint": "eslint .",
    // 检查代码并修复
    "eslint:fix": "pnpm eslint --fix",
    // 预览 web 项目
    "preview:web": "pnpm --filter a4v-web preview",
    // 预览文档项目
    "preview:docs": "pnpm --filter a4v-docs preview",
    // 只允许使用 pnpm
    "preinstall": "npx only-allow pnpm",
    // 准备 husky
    "prepare": "husky",
    // 删除所有的 node_modules、pnpm-lock.yaml，重新安装依赖
    "reinstall": "pnpm clean --del-lock && pnpm install",
    // 样式检查
    "stylelint": "stylelint \"**/*.{css,html,sass,scss,vue}\" \"**/.vitepress/**/*.{css,html,sass,scss,vue}\"",
    // 样式检查并修复
    "stylelint:fix": "pnpm stylelint --fix"
  }
}
```

## 本地运行项目

如果你想直接运行某个应用，可以执行以下命令：

运行 `web` 应用：

```bash
pnpm dev:web
```

运行 `docs` 应用：

```bash
pnpm dev:docs
```

## DevTools

项目内置了 [Vue DevTools](https://devtools-next.vuejs.org/) 插件，可以在开发过程中使用。默认 `true`，可在 `.env.development` 内关闭，并重新运行项目即可：

```bash
VITE_DEVTOOLS = true
```

开启后，项目运行会在页面底部显示一个 Vue DevTools 的图标，点击即可打开 DevTools。

## 本地运行文档

如需本地运行文档，并进行调整，可以执行以下命令：

```bash
pnpm dev:docs
```

## 问题解决

如果你在使用过程中遇到依赖相关的问题，可以尝试重新安装依赖：

```bash
# 请在项目根目录下执行
# 该命令会删除整个仓库所有的 node_modules、pnpm-lock.yaml 后
# 再进行依赖重新安装（安装速度会明显变慢）
pnpm reinstall
```
