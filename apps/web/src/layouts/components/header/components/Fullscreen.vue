<script setup lang="ts">
import { TooltipBtn } from '../../index'

const [show, toggleShow] = useToggle()
const { isFullscreen, toggle } = useFullscreen()

function handleClick() {
  toggle()
  toggleShow(false)
}
</script>

<template>
  <TooltipBtn v-model:show="show" @click="handleClick">
    <template #trigger>
      <div :class="isFullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen'" />
    </template>
    全屏切换
  </TooltipBtn>
</template>
