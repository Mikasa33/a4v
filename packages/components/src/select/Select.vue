<script setup lang="ts">
import type { SelectGroupOption, SelectOption, SelectProps } from 'naive-ui'
import type { SelectSlots } from './types'
import { isArray } from 'lodash-es'
import { NSelect, selectProps as nSelectProps } from 'naive-ui'
import { useRequest } from '../composables/useRequest'
import { pickProps } from '../utils'
import { selectProps } from './props'

const props = defineProps(selectProps)
defineSlots<SelectSlots>()

const value = defineModel<Array<string | number> | string | number | null>('value')
const loading = defineModel<boolean>('loading', { default: false })
const options = defineModel<Array<SelectOption | SelectGroupOption>>('options', { default: () => [] })

const pickedSelectProps = pickProps<SelectProps>(props, nSelectProps)

const { requested, execute } = useRequest(props.onRequest, {
  data: options,
  immediate: props.immediate,
  loading,
  hook: (data: any) => {
    if (isArray(data)) {
      return data
    }
    return []
  },
})

function handleUpdateShow(show: boolean) {
  // 显示菜单 && 没有请求
  if (show && props.onRequest && !requested.value) {
    execute()
  }
}

defineExpose({
  refresh: execute,
})
</script>

<template>
  <NSelect
    v-bind="pickedSelectProps"
    v-model:value="value"
    :loading
    :options
    @update:show="handleUpdateShow"
  />
</template>
