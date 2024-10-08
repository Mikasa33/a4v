import type { CSSProperties, VNodeChild } from 'vue'

export interface LayoutProps {
  /**
   * 折叠侧边栏
   */
  collapsed?: boolean
  /**
   * 内容类名
   */
  contentClass?: any
  /**
   * 内容样式
   */
  contentStyle?: CSSProperties
  /**
   * 底栏类名
   */
  footerClass?: any
  /**
   * 底栏高度
   */
  footerHeight?: number | string
  /**
   * 底栏样式
   */
  footerStyle?: CSSProperties
  /**
   * 顶栏类名
   */
  headerClass?: any
  /**
   * 顶栏高度
   */
  headerHeight?: number | string
  /**
   * 顶栏样式
   */
  headerStyle?: CSSProperties
  /**
   * 布局模式
   */
  mode?: 'horizontal' | 'vertical'
  /**
   * 显示底栏
   */
  showFooter?: boolean
  /**
   * 显示顶栏
   */
  showHeader?: boolean
  /**
   * 显示侧边栏
   */
  showSidebar?: boolean
  /**
   * 侧边栏类名
   */
  sidebarClass?: any
  /**
   * 侧边栏样式
   */
  sidebarStyle?: CSSProperties
  /**
   * 侧边栏宽度
   */
  sidebarWidth?: number | string
  /**
   * 侧边栏折叠宽度
   */
  sidebarCollapsedWidth?: number | string
}

export interface LayoutSlots {
  default?: () => VNodeChild
  footer?: () => VNodeChild
  header?: () => VNodeChild
  sidebar?: (props?: { collapsed?: boolean }) => VNodeChild
}
