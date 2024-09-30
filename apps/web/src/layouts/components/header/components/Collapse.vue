<script setup lang="ts">
import { usePreference } from '@a4v/preference'
import { TooltipBtn } from '../../index'

const [show, toggleShow] = useToggle()
const { info, update } = usePreference()

function handleClick() {
  toggleShow(false)
  update({
    sidebar: {
      collapsed: !info.value.sidebar.collapsed,
    },
  })
}
</script>

<template>
  <TooltipBtn v-model:show="show" @click="handleClick">
    <template #trigger>
      <div :class="info.sidebar.collapsed ? 'i-icon-park-outline-expand-left' : 'i-icon-park-outline-expand-right'" />
    </template>
    {{ info.sidebar.collapsed ? '展开' : '折叠' }}菜单
  </TooltipBtn>
</template>
