<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { LayoutProps, LayoutSlots } from './types'
import { addUnit } from '@a4v/utils'
import { computed } from 'vue'

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

const collapsed = defineModel<boolean>('collapsed', { default: false })
const sidebarCollapsedWidthStr = computed(() => addUnit(sidebarCollapsedWidth))
const footerHeightStr = computed(() => addUnit(footerHeight))
const headerHeightStr = computed(() => addUnit(headerHeight))
const isHorizontal = computed(() => mode === 'horizontal')
const sidebarWidthStr = computed(() => addUnit(sidebarWidth))
const sidebarResultWithStr = computed(() => collapsed.value ? sidebarCollapsedWidthStr.value : sidebarWidthStr.value)
const contentWrapperStyle = computed<CSSProperties>(() => {
  const reduceHeaderHeight = showHeader ? ` - ${headerHeightStr.value}` : ''
  const reduceFooterHeight = showFooter ? ` - ${footerHeightStr.value}` : ''
  return {
    paddingLeft: showSidebar ? sidebarResultWithStr.value : 0,
    height: `calc(100%${reduceHeaderHeight}${reduceFooterHeight})`,
  }
})
const footerWrapperStyle = computed<CSSProperties>(() => ({
  paddingLeft: showSidebar ? sidebarResultWithStr.value : 0,
  height: footerHeightStr.value,
}))
const headerWrapperStyle = computed<CSSProperties>(() => ({
  paddingLeft: isHorizontal.value ? 0 : showSidebar ? sidebarResultWithStr.value : 0,
  height: headerHeightStr.value,
}))
const sidebarWrapperStyle = computed<CSSProperties>(() => ({
  paddingTop: isHorizontal.value ? showHeader ? headerHeightStr.value : 0 : 0,
  width: sidebarResultWithStr.value,
}))
const sidebarTransform = computed(() => `translateX(-${sidebarResultWithStr.value})`)
</script>

<template>
  <div class="y-layout relative h-full flex flex-col">
    <Transition name="layout-sidebar-transition">
      <div
        v-if="showSidebar"
        :class="mode.includes('vertical') ? 'z-9' : null"
        class="absolute h-full transition-300 transition-property-width,padding"
        :style="sidebarWrapperStyle"
      >
        <div
          class="box-border h-full overflow-hidden"
          :class="sidebarClass"
          :style="sidebarStyle"
        >
          <slot
            name="sidebar"
            :collapsed="collapsed"
          />
        </div>
      </div>
    </Transition>
    <div
      v-if="showHeader"
      :class="mode.includes('horizontal') ? 'z-9' : null"
      class="h-full flex-grow transition-300 transition-property-padding"
      :style="headerWrapperStyle"
    >
      <div
        class="box-border h-full overflow-hidden"
        :class="headerClass"
        :style="headerStyle"
      >
        <slot name="header" />
      </div>
    </div>
    <div
      class="transition-300 transition-property-padding"
      :style="contentWrapperStyle"
    >
      <div
        class="box-border h-full overflow-hidden"
        :class="contentClass"
        :style="contentStyle"
      >
        <slot />
      </div>
    </div>
    <div
      v-if="showFooter"
      class="h-full flex-shrink transition-300 transition-property-padding"
      :style="footerWrapperStyle"
    >
      <div
        class="box-border h-full overflow-hidden"
        :class="footerClass"
        :style="footerStyle"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-sidebar-transition-enter-active,
.layout-sidebar-transition-leave-active {
  transition: all 0.3s;
}

.layout-sidebar-transition-enter-from {
  opacity: 0;
  transform: v-bind('sidebarTransform');
}

.layout-sidebar-transition-leave-to {
  opacity: 0;
  transform: v-bind('sidebarTransform');
}
</style>
