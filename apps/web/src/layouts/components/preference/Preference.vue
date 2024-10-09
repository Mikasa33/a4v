<script setup lang="ts">
import TooltipBtn from '../TooltipBtn.vue'
import { Drawer } from './components'

const [show, toggle] = useToggle()
</script>

<template>
  <TooltipBtn @click="toggle">
    <template #trigger>
      <div class="i-icon-park-outline-platte" />
    </template>
    偏好设置
  </TooltipBtn>

  <Drawer v-model:show="show" />
</template>
