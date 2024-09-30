# 规范

::: tip 提示

如果你使用的是 `vscode`，需要安装以下插件：

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - 拼写检查
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码检查
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - 样式检查

:::

具备基本工程素养的同学都会注重编码规范，而代码风格检查是保障代码规范一致性的重要手段。

遵循相应的代码规范有以下好处：

- 较少 bug 错误率
- 高效的开发效率
- 更高的可读性

## Commitlint

在一个团队中，每个人的 git 的 commit 信息都不一样，五花八门，没有一个机制很难保证规范化，如何才能规范化呢？可能你想到的是 git 的 hook 机制，去写 shell 脚本去实现。这当然可以，其实 JavaScript 有一个很好的工具可以实现这个模板，它就是 commitlint（用于校验 git 提交信息规范）。

### 命令

```bash
# 将修改内容添加到暂存区
git add .

# 使用 czg 生成标准化的 git commit message 并提交
pnpm cz
```

### 配置

commitlint 配置文件为 `commitlint.config.cjs`，可以根据项目需求进行修改。

### Git 提交规范

::: info 提交消息的模板
\[type\](scope): [emoji] [messages] description
:::

- `feat` ✨ 新增功能
- `fix` 🐛 修复缺陷
- `docs` 📝 文档变更
- `style` 💄 代码格式（不影响功能，例如空格、分号等格式修正）
- `refactor` ♻️ 代码重构（不包括 bug 修复、功能新增）
- `perf` ⚡️ 性能优化
- `test` ✅ 添加疏漏测试或已有测试改动
- `build` 📦️ 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
- `ci` 🎡 修改 CI 配置、脚本
- `revert` ⏪️ 回滚 commit
- `chore` 🔨 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）

### 关闭 Git 提交规范检查

如果你想关闭 Git 提交规范检查，有两种方式：

::: code-group

```bash [临时关闭]
git commit -m 'feat: add home page' --no-verify
```

```bash [永久关闭]
# 在 .husky/commit-msg 内注释以下代码即可
pnpm exec commitlint --edit "$1" # [!code --]
```

:::

## Cspell

Cspell 是一个用于检查拼写错误的工具，可以检查代码中的拼写错误，避免因为拼写错误导致的 bug。

### 命令

```bash
pnpm cspell
```

### 配置

cspell 配置文件为 `cspell.json`，可以根据项目需求进行修改。

## ESLint

ESLint 是一个代码规范和错误检查工具，用于识别和报告 TypeScript 代码中的语法错误。

### 命令

```bash
# 检查代码
pnpm eslint

# 检查代码并修复
pnpm eslint --fix
```

### 配置

eslint 配置文件为 `eslint.config.js`，可以根据项目需求进行修改。

## Git Hook

git hook 一般结合各种 lint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则不会进行提交，需要开发者自行修改后再次进行提交。

### husky

有一个问题就是校验会校验全部代码，但是我们只想校验我们自己提交的代码，这个时候就可以使用 husky。

最有效的解决方案就是将 lint 校验放到本地，常见做法是使用 `husky` 或者 `pre-commit` 在本地提交之前先做一次 lint 校验。

项目在 `.husky` 内部定义了相应的 hooks。

如果你想关闭 `husky`，直接删除 `.husky` 目录即可。

### lint-staged

用于自动修复提交文件风格问题，其配置文件为 `lint-staged.config.js`，可以根据项目需求进行修改。

## Stylelint

Stylelint 用于校验项目内部 css 的风格，加上编辑器的自动修复，可以很好的统一项目内部 css 风格。

### 命令

```bash
# 检查样式
pnpm stylelint

# 检查样式并修复
pnpm stylelint --fix
```

### 配置

stylelint 配置文件为 `stylelint.config.js`，可以根据项目需求进行修改。
