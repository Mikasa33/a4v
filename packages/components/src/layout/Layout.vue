<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { LayoutProps, LayoutSlots } from './types'
import { addUnit } from '@a4v/utils'
import { computed } from 'vue'
import { useCssr } from '../composables'
import { cssr } from './cssr'

const {
  sidebarCollapsedWidth = 64,
  footerHeight = 64,
  headerHeight = 64,
  mode = 'vertical',
  showHeader = true,
  showFooter = true,
  showSidebar = true,
  sidebarWidth = 240,
} = defineProps<LayoutProps>()
defineSlots<LayoutSlots>()

useCssr(cssr)

const collapsed = defineModel<boolean>('collapsed', { default: false })
const sidebarCollapsedWidthStr = computed(() => addUnit(sidebarCollapsedWidth))
const footerHeightStr = computed(() => addUnit(footerHeight))
const headerHeightStr = computed(() => addUnit(headerHeight))
const isHorizontal = computed(() => mode === 'horizontal')
const sidebarWidthStr = computed(() => addUnit(sidebarWidth))
const sidebarResultWithStr = computed(() => collapsed.value ? sidebarCollapsedWidthStr.value : sidebarWidthStr.value)
const contentContainerStyle = computed<CSSProperties>(() => {
  const reduceHeaderHeight = showHeader ? ` - ${headerHeightStr.value}` : ''
  const reduceFooterHeight = showFooter ? ` - ${footerHeightStr.value}` : ''
  return {
    paddingLeft: showSidebar ? sidebarResultWithStr.value : 0,
    height: `calc(100%${reduceHeaderHeight}${reduceFooterHeight})`,
  }
})
const footerContainerStyle = computed<CSSProperties>(() => ({
  paddingLeft: showSidebar ? sidebarResultWithStr.value : 0,
  height: footerHeightStr.value,
}))
const headerContainerStyle = computed<CSSProperties>(() => ({
  paddingLeft: isHorizontal.value ? 0 : showSidebar ? sidebarResultWithStr.value : 0,
  height: headerHeightStr.value,
}))
const sidebarContainerStyle = computed<CSSProperties>(() => ({
  paddingTop: isHorizontal.value ? showHeader ? headerHeightStr.value : 0 : 0,
  width: sidebarResultWithStr.value,
}))
const sidebarTransform = computed(() => `translateX(-${sidebarResultWithStr.value})`)

const style = computed(() => ({
  '--a-layout-sidebar-transform': sidebarTransform.value,
}))
</script>

<template>
  <div class="a-layout" :style>
    <Transition name="a-layout-sidebar">
      <div
        v-if="showSidebar"
        :class="mode.includes('vertical') ? 'a-layout-sidebar--vertical' : null"
        class="a-layout-sidebar-container"
        :style="sidebarContainerStyle"
      >
        <div class="a-layout-sidebar" :class="sidebarClass" :style="sidebarStyle">
          <slot name="sidebar" :collapsed="collapsed" />
        </div>
      </div>
    </Transition>
    <div
      v-if="showHeader"
      :class="mode.includes('horizontal') ? 'a-layout-header--horizontal' : null"
      class="a-layout-header-container"
      :style="headerContainerStyle"
    >
      <div class="a-layout-header" :class="headerClass" :style="headerStyle">
        <slot name="header" />
      </div>
    </div>
    <div class="a-layout-content-container" :style="contentContainerStyle">
      <div class="a-layout-content" :class="contentClass" :style="contentStyle">
        <slot />
      </div>
    </div>
    <div
      v-if="showFooter"
      class="a-layout-footer-container"
      :style="footerContainerStyle"
    >
      <div class="a-layout-footer" :class="footerClass" :style="footerStyle">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
