---
outline: deep
---

# 快速开始

## 前置准备

### 环境要求

- [Git](https://git-scm.com/) 任意版本。
- [Node.js](https://nodejs.org/en/) 20.15.0 及以上版本，推荐使用 [fnm](https://github.com/Schniz/fnm/) 或者 [nvm](https://github.com/nvm-sh/nvm/) 进行版本管理。

为了验证你的环境是否满足以上要求，你可以通过以下命令查看版本：

```bash
# 出现相应 node LTS 版本即可
node -v

# 出现相应 git 版本即可
git -v
```

## 启动项目

### 获取源码

```bash
# 克隆代码
git clone https://github.com/Mikasa33/a4v.git
```

::: danger 注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。

:::

### 安装依赖

```bash
# 进入项目目录
cd a4v

# 使用项目指定的 pnpm 版本进行依赖安装
corepack enable

# 安装依赖
pnpm install
```

::: tip 提示

项目只支持使用 `pnpm` 进行依赖安装，默认会使用 `corepack` 来安装指定版本的 `pnpm`。

:::

### 运行项目

```bash
# 运行 web 项目
pnpm dev:web

# 运行文档项目
pnpm dev:docs
```
