import type { DefaultTheme, HeadConfig } from 'vitepress'
import { defineConfig } from 'vitepress'

const head: HeadConfig[] = [
  ['meta', { content: 'Mikasa33', name: 'author' }],
  ['meta', { content: 'a4v, vue, vite, naive-ui' }],
  ['link', { href: '/vite.svg', rel: 'icon', type: 'image/svg+xml' }],
  ['meta', { content: 'a4v docs', name: 'keywords' }],
  ['link', { href: '/vite.svg', rel: 'icon' }],
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

// https://vitepress.dev
export default defineConfig({
  description: 'admin for vue',
  head,
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
    logo: '/vite.svg',
    nav,
    outline: {
      label: '页面导航',
      level: [2, 3],
    },
    returnToTopLabel: '回到顶部',
    search,
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide },
    },
    sidebarMenuLabel: '菜单',
    siteTitle: 'a4v',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mikasa33/a4v' },
    ],
  },
  vite: {
    server: {
      host: true,
      open: true,
      port: 7778,
    },
  },
})
