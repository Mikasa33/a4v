import type { BasicColorSchema } from '@vueuse/core'

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
