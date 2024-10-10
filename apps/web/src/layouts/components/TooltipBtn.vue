<script setup lang="ts">
import type { VNodeChild } from 'vue'
import { usePreference } from '@a4v/preference'
import { darkTheme } from 'naive-ui'

const emits = defineEmits<{
  click: []
}>()
defineSlots<{
  default: () => VNodeChild
  trigger: () => VNodeChild
}>()

const show = defineModel<boolean>('show')

const { info } = usePreference()

const theme = computed<any>(() => info.value.header.inverted ? darkTheme : {})

function handleClick() {
  emits('click')
}
</script>

<template>
  <NTooltip v-model:show="show">
    <template #trigger>
      <NButton :theme secondary class="h-32px w-32px p-0" @click="handleClick">
        <slot name="trigger" />
      </NButton>
    </template>
    <slot />
  </NTooltip>
</template>
