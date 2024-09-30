<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { AConfigProvider } from '@a4v/components'
import { usePreference } from '@a4v/preference'
import { darkTheme } from 'naive-ui'
import { createHoverColor, createPressedColor } from 'naive-ui/es/_utils/color'

const { isDark, themeColor } = usePreference()

const theme = computed(() => isDark.value ? darkTheme : null)

function createColor(themeColor: any) {
  const colors: any = {}
  for (const key in themeColor) {
    colors[key] = themeColor[key]
    colors[`${key}Hover`] = createHoverColor(colors[key])
    colors[`${key}Pressed`] = createPressedColor(colors[key])
  }
  return colors
};

const themeOverrides = computed<GlobalThemeOverrides>(() => {
  return {
    common: {
      ...createColor(themeColor.value),
      borderRadius: '8px',
      borderRadiusSmall: '6px',
    },
    Card: {
      borderRadius: '12px',
    },
    Drawer: {
      borderRadius: '12px',
    },
  }
})
</script>

<template>
  <AConfigProvider :theme :theme-overrides>
    <RouterView />
  </AConfigProvider>
</template>
