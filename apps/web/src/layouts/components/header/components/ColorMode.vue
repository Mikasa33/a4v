<script setup lang="ts">
import { usePreference } from '@a4v/preference'
import { TooltipBtn } from '../../index'

const { isDark, update } = usePreference()

function handleClick() {
  update({
    colorMode: isDark.value ? 'light' : 'dark',
  })
}
</script>

<template>
  <TooltipBtn @click="handleClick">
    <template #trigger>
      <div :class="isDark ? 'i-icon-park-outline-moon' : 'i-icon-park-outline-sun-one'" />
    </template>
    主题切换
  </TooltipBtn>
</template>
