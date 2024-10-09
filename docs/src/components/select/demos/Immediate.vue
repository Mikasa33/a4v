<script lang="ts" setup>
import type { SelectProps } from '@a4v/components'
import type { SelectOption } from 'naive-ui'
import { ASelect } from '@a4v/components'

const selectProps: SelectProps = {
  immediate: true,
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
  <ASelect v-bind="selectProps" />
</template>
