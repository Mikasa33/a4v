<script setup lang="tsx">
import type { LayoutMode } from '@a4v/preference'
import { useVModel4Path } from '@a4v/hooks'
import { usePreference } from '@a4v/preference'
import { useThemeVars } from 'naive-ui'

const themeVars = useThemeVars()
const headerStyle = computed(() => ({ background: themeVars.value.primaryColor }))
const sidebarStyle = computed(() => ({ background: `${themeVars.value.primaryColor}aa` }))
const contentStyle = computed(() => ({ background: `${themeVars.value.primaryColor}65` }))
const selectStyle = computed(() => ({ borderColor: themeVars.value.primaryColor }))

const { info, update } = usePreference()
const layoutMode = useVModel4Path(info, 'layoutMode', update)
function handleChangeMode(value: LayoutMode) {
  layoutMode.value = value
}
</script>

<template>
  <NDivider class="!my-20px">
    布局模式
  </NDivider>
  <NFlex
    align="center"
    justify="center"
  >
    <NTooltip>
      <template #trigger>
        <NEl
          :style="layoutMode === 'vertical' && selectStyle"
          class="h-64px w-96px flex cursor-pointer border-1.5px border-[var(--border-color)] rounded-[var(--border-radius)] p-8px transition-colors transition-300"
          @click="handleChangeMode('vertical')"
        >
          <NEl :style="sidebarStyle" class="mr-3px h-full w-24px rounded-[var(--border-radius-small)]" />
          <div class="w-full flex flex-col">
            <NEl :style="headerStyle" class="mb-3px h-12px w-full rounded-[var(--border-radius-small)]" />
            <NEl :style="contentStyle" class="w-full flex-1 rounded-[var(--border-radius-small)]" />
          </div>
        </NEl>
      </template>
      左侧菜单模式
    </NTooltip>

    <!-- <NTooltip>
      <template #trigger>
        <NEl
          :style="value === 'vertical-mix' && selectStyle"
          class="h-54px w-68px flex cursor-pointer border-1.5px border-[var(--border-color)] rounded-[var(--border-radius)] p-8px transition-colors transition-300"
          @click="value = 'vertical-mix'"
        >
          <NEl :style="sidebarStyle" class="mr-3px h-full w-16px rounded-[var(--border-radius-small)]" />
          <NEl :style="sidebarStyle" class="mr-3px h-full w-24px rounded-[var(--border-radius-small)]" />
          <div class="w-full flex flex-col">
            <NEl :style="headerStyle" class="mb-3px h-12px w-full rounded-[var(--border-radius-small)]" />
            <Nel :style="contentStyle" class="w-full flex-1 rounded-[var(--border-radius-small)]" />
          </div>
        </NEl>
      </template>
      左侧菜单混合模式
    </NTooltip> -->

    <NTooltip>
      <template #trigger>
        <NEl
          :style="layoutMode === 'horizontal' && selectStyle"
          class="h-64px w-96px flex flex-col cursor-pointer border-1.5px border-[var(--border-color)] rounded-[var(--border-radius)] p-8px transition-colors transition-300"
          @click="handleChangeMode('horizontal')"
        >
          <NEl :style="headerStyle" class="mb-3px min-h-12px w-full rounded-[var(--border-radius-small)]" />
          <NEl :style="contentStyle" class="w-full flex-1 rounded-[var(--border-radius-small)]" />
        </NEl>
      </template>
      顶部菜单模式
    </NTooltip>

    <NTooltip>
      <template #trigger>
        <NEl
          :style="layoutMode === 'horizontal-mix' && selectStyle"
          class="h-64px w-96px flex flex-col cursor-pointer border-1.5px border-[var(--border-color)] rounded-[var(--border-radius)] p-8px transition-colors transition-300"
          @click="handleChangeMode('horizontal-mix')"
        >
          <NEl :style="headerStyle" class="mb-3px min-h-12px w-full rounded-[var(--border-radius-small)]" />
          <div class="wh-full flex">
            <NEl :style="sidebarStyle" class="mr-3px h-full w-24px rounded-[var(--border-radius-small)]" />
            <NEl :style="contentStyle" class="w-full rounded-[var(--border-radius-small)]" />
          </div>
        </NEl>
      </template>
      顶部菜单混合模式
    </NTooltip>
  </NFlex>
</template>
