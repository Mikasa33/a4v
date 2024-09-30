<script setup lang="ts">
import { TooltipBtn } from '../../index'

const url = import.meta.env.VITE_APP_GITHUB

function handleClick() {
  window.open(url, '_blank')
}
</script>

<template>
  <TooltipBtn @click="handleClick">
    <template #trigger>
      <div class="i-icon-park-outline-github-one" />
    </template>
    Github 地址
  </TooltipBtn>
</template>
