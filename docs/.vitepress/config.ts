import type { DefaultTheme, HeadConfig } from 'vitepress'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig, postcssIsolateStyles } from 'vitepress'

const fileAndStyles: Record<string, string> = {}

const head: HeadConfig[] = [
  ['meta', { content: 'Mikasa33', name: 'author' }],
  ['meta', { content: 'a4v, vue, vite, naive-ui' }],
  ['link', { href: '/logos/logo.svg', rel: 'icon', type: 'image/svg+xml' }],
  ['meta', { content: 'a4v docs', name: 'keywords' }],
  ['link', { href: '/logos/logo.svg', rel: 'icon' }],
]

const search: DefaultTheme.Config['search'] = {
  options: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        displayDetails: '显示详细信息',
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        backButtonTitle: '关闭搜索',
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
        },
      },
    },
  },
  provider: 'local',
}

const nav: DefaultTheme.NavItem[] = [
  { activeMatch: '^/guide/', link: '/guide/introduction/a4v', text: '指南' },
  { activeMatch: '^/components/', link: '/components/form', text: '组件' },
  { link: 'https://github.com/Mikasa33/a4v', text: '演示' },
]

const sidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: '简介',
    items: [
      {
        link: 'introduction/a4v',
        text: '关于 a4v',
      },
      {
        link: 'introduction/quick-start',
        text: '快速开始',
      },
    ],
  },
  {
    text: '基础',
    items: [
      {
        link: 'essentials/concept',
        text: '基础概念',
      },
      {
        link: 'essentials/development',
        text: '本地开发',
      },
      {
        link: 'essentials/config',
        text: '配置',
      },
      {
        link: 'essentials/server',
        text: '服务端交互与数据 Mock',
      },
    ],
  },
  {
    text: '深入',
    items: [
      {
        link: 'in-depth/loading',
        text: '全局 Loading',
      },
    ],
  },
  {
    text: '工程',
    items: [
      {
        link: 'project/standard',
        text: '规范',
      },
      {
        link: 'project/dir',
        text: '目录说明',
      },
    ],
  },
]

const sidebarComponents: DefaultTheme.SidebarItem[] = [
  {
    text: '数据录入',
    collapsed: false,
    base: '/components',
    items: [
      { text: '表单 Form', link: '/form/' },
      { text: '搜索关键词 Search Keyword', link: '/search-keyword/' },
      { text: '选择器 Select', link: '/select/' },
    ],
  },
  {
    text: '数据展示',
    collapsed: false,
    base: '/components',
    items: [
      { text: '表格 Table', link: '/table/' },
      { text: '树 Tree', link: '/tree/' },
      { text: '展示标签 View Tag', link: '/view-tag/' },
      { text: '展示时间 View Time', link: '/view-time/' },
    ],
  },
  {
    text: '反馈',
    collapsed: false,
    base: '/components',
    items: [
      { text: '抽屉 Drawer', link: '/drawer/' },
      { text: '模态框 Modal', link: '/modal/' },
      { text: '弹出信息 Popover', link: '/popover/' },
    ],
  },
  {
    text: '布局',
    collapsed: false,
    base: '/components',
    items: [
      { text: '弹性布局 Flex', link: '/flex/' },
    ],
  },
  {
    text: '配置',
    collapsed: false,
    base: '/components',
    items: [
      { text: '全局化配置 Config Provider', link: '/config-provider/' },
    ],
  },
  {
    text: '高级',
    collapsed: false,
    base: '/components',
    items: [
      { text: '高级表单 Adv Form', link: '/adv-form/' },
      { text: '高级表格 Adv Table', link: '/adv-table/' },
      { text: '高级树 Adv Tree', link: '/adv-tree/' },
    ],
  },
]

// https://vitepress.dev
export default defineConfig({
  base: '/a4v/',
  description: 'admin for vue',
  head,
  markdown: {
    theme: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
  },
  postRender(context) {
    const styleRegex = /<css-render-style>(([\s\S])+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  srcDir: 'src',
  title: 'a4v',
  themeConfig: {
    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      next: '下一页',
      prev: '上一页',
    },
    editLink: {
      pattern: 'https://github.com/Mikasa33/a4v/edit/main/docs/src/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Mikasa33`,
      // message: '基于 MIT 许可发布',
    },
    langMenuLabel: '多语言',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: '最后更新于',
    },
    lightModeSwitchTitle: '切换到浅色模式',
    logo: '/logos/logo.svg',
    nav,
    outline: {
      label: '页面导航',
      level: [2, 3],
    },
    returnToTopLabel: '回到顶部',
    search,
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide },
      '/components/': { base: '/components/', items: sidebarComponents },
    },
    sidebarMenuLabel: '菜单',
    siteTitle: 'a4v',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mikasa33/a4v' },
    ],
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html)
      return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssIsolateStyles({
            includeFiles: [/vp-doc\.css/],
          }),
        ],
      },
    },
    plugins: [
      VueJsx(),
      UnoCSS(),
    ],
    server: {
      host: true,
      open: true,
      port: 7778,
    },
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc', '@a4v/components'],
    },
  },
})
