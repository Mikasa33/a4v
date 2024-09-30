<script setup lang="ts">
import type { VNodeChild } from 'vue'

const emits = defineEmits<{
  click: []
}>()
defineSlots<{
  default: () => VNodeChild
  trigger: () => VNodeChild
}>()

const show = defineModel<boolean>('show')

function handleClick() {
  emits('click')
}
</script>

<template>
  <NTooltip v-model:show="show">
    <template #trigger>
      <NButton secondary class="h-32px w-32px p-0" @click="handleClick">
        <slot name="trigger" />
      </NButton>
    </template>
    <slot />
  </NTooltip>
</template>
