<script lang="ts" setup>
import type { TreeProps } from '@a4v/components'
import type { TreeOption } from 'naive-ui'
import { ATree } from '@a4v/components'
import { reactive } from 'vue'

const treeProps = reactive<TreeProps>({
  blockLine: true,
  expandOnClick: true,
  immediate: true,
  onRequest: (): Promise<TreeOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            key: '1',
            label: '道生一',
            children: [
              { key: '1-1', label: '一生二' },
            ],
          },
          {
            key: '2',
            label: '道生一',
            children: [
              { key: '2-1', label: '一生二' },
            ],
          },
          { key: '3', label: '道生一' },
        ])
      }, 1000)
    })
  },
})
</script>

<template>
  <ATree v-bind="treeProps" />
</template>
