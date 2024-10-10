<script setup lang="ts">
import type { InputProps } from 'naive-ui'
import type { SearchKeywordSlots } from './types'
import { Icon } from '@iconify/vue'
import { watchDebounced } from '@vueuse/core'
import { NInput, NInputGroup, inputProps as nInputProps, NSelect } from 'naive-ui'
import { computed, watch } from 'vue'
import { pickProps } from '../utils'
import { cssr } from './cssr'
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

cssr.mount()
</script>

<template>
  <NInputGroup class="a-search-keyword">
    <NSelect
      v-if="selectField"
      v-model:value="field"
      :options="fieldOptions"
      :class="fieldClass"
      :consistent-menu-width="false"
      class="a-search-keyword__select"
    />
    <NInput
      v-bind="inputProps"
      v-model:value="value"
      :class="inputClass"
      class="a-search-keyword__input"
    >
      <template #prefix>
        <slot v-if="$slots['input-prefix']" name="input-prefix" />
        <Icon v-else-if="!selectField" icon="icon-park-outline:search" class="a-search-keyword__icon" />
      </template>
    </NInput>
  </NInputGroup>
</template>
