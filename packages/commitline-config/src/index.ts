import type { UserConfig } from 'cz-git'
import childProcess from 'node:child_process'

// @tip: git branch name = feature/issue_33   =>    auto get defaultIssues = #33
const issue = childProcess.execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim()
  .split('_')[1]

export default {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  新增功能 | A new feature', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:      🐛  修复缺陷 | A bug fix', emoji: ':bug:' },
      { value: 'docs', name: 'docs:     📝  文档变更 | Documentation only changes', emoji: ':memo:' },
      { value: 'style', name: 'style:    💄  代码格式（不影响功能，例如空格、分号等格式修正） | Changes that do not affect the meaning of the code', emoji: ':lipstick:' },
      { value: 'refactor', name: 'refactor: ♻️   代码重构（不包括 bug 修复、功能新增） | A code change that neither fixes a bug nor adds a feature', emoji: ':recycle:' },
      { value: 'perf', name: 'perf:     ⚡️  性能优化 | A code change that improves performance', emoji: ':zap:' },
      { value: 'test', name: 'test:     ✅  添加疏漏测试或已有测试改动 | Adding missing tests or correcting existing tests', emoji: ':white_check_mark:' },
      { value: 'build', name: 'build:    📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等） | Changes that affect the build system or external dependencies', emoji: ':package:' },
      { value: 'ci', name: 'ci:       🎡  修改 CI 配置、脚本 | Changes to our CI configuration files and scripts', emoji: ':ferris_wheel:' },
      { value: 'revert', name: 'revert:   ⏪️  回滚 commit | Revert to a commit', emoji: ':rewind:' },
      { value: 'chore', name: 'chore:    🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例） | Other changes that do not modify src or test files', emoji: ':hammer:' },
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' },
    ],
    customIssuePrefixAlign: !issue ? 'top' : 'bottom',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: !issue ? '' : `#${issue}`,
    defaultScope: '',
    defaultSubject: '',
  },
} as UserConfig
