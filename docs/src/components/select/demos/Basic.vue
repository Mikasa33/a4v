<script lang="ts" setup>
import type { SelectProps } from '@a4v/components'
import type { SelectOption } from 'naive-ui'
import { ASelect } from '@a4v/components'
import { ref } from 'vue'

const value = ref()
const selectProps: SelectProps = {
  onRequest: (): Promise<SelectOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            label: 'Drive My Car',
            value: 'song1',
          },
          {
            label: 'Norwegian Wood',
            value: 'song2',
          },
          {
            label: 'You Won\'t See',
            value: 'song3',
            disabled: true,
          },
        ])
      }, 1000)
    })
  },
}
</script>

<template>
  <ASelect
    v-model:value="value"
    v-bind="selectProps"
  />
  <pre>已选值：{{ value }}</pre>
</template>
