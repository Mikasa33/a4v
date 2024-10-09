<script setup lang="ts">
import type { InputProps } from 'naive-ui'
import type { SearchKeywordSlots } from './types'
import { watchDebounced } from '@vueuse/core'
import { NInput, NInputGroup, inputProps as nInputProps, NSelect } from 'naive-ui'
import { computed, watch } from 'vue'
import { pickProps } from '../utils'
import { searchKeywordProps } from './props'

const props = defineProps(searchKeywordProps)
const emits = defineEmits<{
  search: [value: string | null, field: string | number | null]
}>()
defineSlots<SearchKeywordSlots>()

const value = defineModel<string | null>('value', { default: null })
const field = defineModel<string | number | null>('field', { default: null })

const inputProps = pickProps<InputProps>(props, nInputProps)

const selectField = computed(() => props.fieldOptions.length)
watch(
  () => props.fieldOptions,
  (val) => {
    const find = val.find(item => item.value === field.value)
    if (!find) {
      field.value = val?.[0]?.value as any
    }
  },
  {
    immediate: true,
  },
)
watchDebounced(
  value,
  () => {
    emits('search', value.value, field.value)
  },
  {
    debounce: props.debounce,
  },
)
</script>

<template>
  <NInputGroup class="w-auto">
    <NSelect
      v-if="selectField"
      v-model:value="field"
      :options="fieldOptions"
      :class="fieldClass"
      :consistent-menu-width="false"
      class="w-auto"
    />
    <NInput
      v-bind="inputProps"
      v-model:value="value"
      class="flex-1"
      :class="inputClass"
    >
      <template #prefix>
        <slot v-if="$slots['input-prefix']" name="input-prefix" />
        <div v-else-if="!selectField" class="i-icon-park-outline-search mr-4px" />
      </template>
    </NInput>
  </NInputGroup>
</template>
