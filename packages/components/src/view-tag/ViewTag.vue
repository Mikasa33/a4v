<script setup lang="ts">
import type { SelectOption, TagProps } from 'naive-ui'
import type { ViewTagSlots } from './types'
import { NTag, tagProps as nTagProps } from 'naive-ui'
import { computed } from 'vue'
import { pickProps } from '../utils'
import { viewTagProps } from './props'

const props = defineProps(viewTagProps)
defineSlots<ViewTagSlots>()

const tagProps = pickProps<TagProps>(props, nTagProps)

const view = computed(() => {
  if (props.options?.length) {
    return props.options.find((option: SelectOption) => option.value === props.value)?.label || ''
  }
  return props.value
})
</script>

<template>
  <NTag v-bind="tagProps">
    {{ view }}
  </NTag>
</template>
