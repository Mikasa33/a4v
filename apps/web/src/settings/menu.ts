// @unocss-includes

export const menus = [
  {
    key: '/',
    label: '首页',
    icon: 'i-icon-park-outline-home',
  },
  {
    key: '/demo/document',
    label: '文档',
    icon: 'i-icon-park-outline-book',
    children: [
      {
        key: '/demo/document/vite',
        label: 'Vite 文档',
        icon: 'i-logos:vitejs',
      },
      {
        key: '/demo/document/vue',
        label: 'Vue 文档',
        icon: 'i-logos:vue',
      },
      {
        key: '/demo/document/vueuse',
        label: 'VueUse 文档',
        icon: 'i-logos:vueuse',
      },
      {
        key: '/demo/document/unocss',
        label: 'UnoCSS 文档',
        icon: 'i-logos:unocss',
      },
      {
        key: '/demo/document/naiveui',
        label: 'Naive UI 文档（外链）',
        icon: 'i-logos:naiveui',
        url: 'https://www.naiveui.com/zh-CN',
      },
    ],
  },
  {
    key: '/system',
    label: '系统管理',
    icon: 'i-icon-park-outline-system',
    children: [
      {
        key: '/system/menu',
        label: '菜单管理',
        icon: 'i-icon-park-outline-list-checkbox',
      },
      {
        key: '/system/user',
        label: '用户管理',
        icon: 'i-icon-park-outline-user',
      },
    ],
  },
  {
    key: '/about',
    label: '关于',
    icon: 'i-icon-park-outline-tag',
  },
]
