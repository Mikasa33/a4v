# 配置

## 环境变量配置

项目的环境变量配置位于应用目录下的 `.env`、`.env.development`、`.env.production`。

规则与 [Vite Env Variables and Modes](https://cn.vitejs.dev/guide/env-and-mode) 一致。格式如下：

```bash
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

::: tip 提示

- 只有以 `VITE_` 开头的变量会被嵌入到客户端侧的包中，你可以在项目代码中这样访问它们：

  ```ts
  console.log(import.meta.env.VITE_PROT)
  ```

- 以 `VITE_GLOB_*` 开头的的变量，在打包的时候，会被加入 `_app.config.js`配置文件当中。

:::

## 环境配置说明

::: code-group

```bash [.env]
# 应用标题
VITE_APP_TITLE = a4v

# 应用 LOGO
VITE_APP_LOGO = /vite.svg

# Github
VITE_APP_GITHUB = https://github.com/Mikasa33/a4v
```

```bash [.env.development]
# 是否打开 Vue DevTools
VITE_DEVTOOLS = true
```

```bash [.env.production]

```

:::

## 生产环境动态配置

当在大仓根目录下，执行 `pnpm build` 构建项目之后，会自动在对应的应用下生成 `dist/_app.config.js` 文件并插入 `index.html`。

`_app.config.js` 是一个动态配置文件，可以在项目构建之后，根据不同的环境动态修改配置。内容如下：

```ts
window._A4V_APP_CONFIG_ = {
  VITE_GLOB_API_URL: 'https://mock-napi.a4v.pro/api',
}
Object.freeze(window._A4V_APP_CONFIG_)
Object.defineProperty(window, '_A4V_APP_CONFIG_', {
  configurable: false,
  writable: false,
})
```

### 作用

`_app.config.js` 用于项目在打包后，需要动态修改配置的需求，如接口地址。不用重新进行打包，可在打包后修改 /`dist/_app.config.js` 内的变量，刷新即可更新代码内的局部变量。这里使用 `js` 文件，是为了确保配置文件加载顺序保持在前面。

### 使用

想要获取 `_app.config.js` 内的变量，需要使用 `@a4v/hooks` 提供的 `useAppConfig` 方法。

```ts
const { apiURL } = useAppConfig(import.meta.env, import.meta.env.PROD)
```

### 新增

新增一个可动态修改的配置项，只需要按照如下步骤即可：

- 首先在 `.env` 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 `VITE_GLOB_*` 开头的变量，如：

  ```bash
  VITE_GLOB_OTHER_API_URL=https://mock-napi.a4v.pro/other-api
  ```

- 在 `packages/types/global.d.ts`，新增对应的类型定义，如：

  ```ts
  export interface A4vAppConfigRaw {
    VITE_GLOB_API_URL: string
    VITE_GLOB_OTHER_API_URL: string // [!code ++]
  }

  export interface ApplicationConfig {
    apiURL: string
    otherApiURL: string // [!code ++]
  }
  ```

到这里，就可以在项目内使用 `useAppConfig` 方法获取到新增的配置项了。

```ts
const { otherApiURL } = useAppConfig(import.meta.env, import.meta.env.PROD)
```

::: warning 注意

`useAppConfig` 方法只能在应用内使用，不要耦合到包内部去使用。这里传入 `import.meta.env` 和 `import.meta.env.PROD` 是为了避免这种情况，一个纯粹的包，应避免使用特定构建工具的变量。

:::

## 偏好设置

项目提供了非常丰富的偏好设置，用于动态配置项目的各种功能：

如果你找不到文档说明，可以尝试自己配置好以后，点击 `复制偏好设置`，覆盖项目默认即可。配置文件位于应用目录下的 `preference.ts`，在这里，你可以覆盖框架默认的配置，实现自定义配置。

```ts
import type { App } from 'vue'
import { createPreference } from '@a4v/preference'

export const preference = createPreference({
  // overrides
})

export function setupPreference(app: App) {
  app.use(preference)
}
```

### 框架默认配置

::: details 查看框架默认配置

```ts
export const defaultPreference: PreferenceInfo = {
  colorMode: 'auto',
  darkThemeColor: {
    primaryColor: '#63E2B7',
    infoColor: '#70C0E8',
    successColor: '#63E2B7',
    warningColor: '#F2C97D',
    errorColor: '#E88080',
  },
  footer: {
    show: true,
    height: 64,
    inverted: false,
  },
  header: {
    show: true,
    height: 64,
    inverted: false,
  },
  layoutMode: 'vertical',
  lightThemeColor: {
    primaryColor: '#18A058',
    infoColor: '#2080F0',
    successColor: '#18A058',
    warningColor: '#F0A020',
    errorColor: '#D03050',
  },
  page: {
    animate: true,
    animateMode: 'fade-slide',
    loadingBar: true,
  },
  sidebar: {
    show: true,
    width: 240,
    collapsedWidth: 64,
    collapsed: false,
    inverted: false,
  },
}
```

:::

::: details 查看框架默认配置类型

```ts
export interface HeaderPreferenceInfo {
  /**
   * 是否显示
   */
  show: boolean
  /**
   * 高度
   */
  height: number
  /**
   * 是否深色
   */
  inverted: boolean
}

export interface FooterPreferenceInfo {
  /**
   * 是否显示
   */
  show: boolean
  /**
   * 高度
   */
  height: number
  /**
   * 是否深色
   */
  inverted: boolean
}

export type LayoutMode = 'horizontal' | 'horizontal-mix' | 'vertical'

export interface SidebarPreferenceInfo {
  /**
   * 是否显示
   */
  show: boolean
  /**
   * 宽度
   */
  width: number
  /**
   * 折叠宽度
   */
  collapsedWidth: number
  /**
   * 是否折叠
   */
  collapsed: boolean
  /**
   * 是否深色
   */
  inverted: boolean
}

export type PageAnimateMode = 'fade' | 'fade-slide' | 'fade-top' | 'fade-bottom'

export interface PagePreferenceInfo {
  /**
   * 切换动画
   */
  animate: boolean
  /**
   * 切换动画模式
   */
  animateMode: PageAnimateMode
  /**
   * 加载进度条
   */
  loadingBar: boolean
}

export interface ThemeColorPreferenceInfo {
  /**
   * 主题色
   */
  primaryColor: string
  /**
   * 信息色
   */
  infoColor: string
  /**
   * 成功色
   */
  successColor: string
  /**
   * 警告色
   */
  warningColor: string
  /**
   * 错误色
   */
  errorColor: string
}

export interface PreferenceInfo {
  /**
   * 主题模式
   */
  colorMode: BasicColorSchema
  /**
   * 深色主题颜色
   */
  darkThemeColor: ThemeColorPreferenceInfo
  /**
   * 底栏
   */
  footer: FooterPreferenceInfo
  /**
   * 顶栏
   */
  header: HeaderPreferenceInfo
  /**
   * 布局模式
   */
  layoutMode: LayoutMode
  /**
   * 浅色主题颜色
   */
  lightThemeColor: ThemeColorPreferenceInfo
  /**
   * 页面
   */
  page: PagePreferenceInfo
  /**
   * 侧边栏
   */
  sidebar: SidebarPreferenceInfo
}
```

:::

::: warning 注意

- `createPreference` 方法只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置。
- 任何配置项都可以覆盖，只需要在 `createPreference` 方法内覆盖即可，不要修改默认配置文件。

:::
