<script setup lang="ts">
import type { AdvTableFilterPresetType, AdvTableProps } from '@a4v/components'
import { AAdvTable } from '@a4v/components'
import { NRadio, NRadioGroup } from 'naive-ui'
import { computed, reactive, ref } from 'vue'

const preset = ref<AdvTableFilterPresetType>('drawer')
const advTableRef = ref()
const advTableProps: AdvTableProps = reactive({
  searchable: true,
  filterable: true,
  filterFormProps: {
    xGap: computed(() => preset.value === 'popover' ? 16 : 0),
    giSpan: computed(() => preset.value === 'popover' ? 12 : 24),
    items: [
      {
        path: 'age',
        label: '年龄',
        component: 'NInputNumber',
        componentProps: {
          class: 'w-full',
        },
      },
      {
        path: 'address',
        label: '地址',
        component: 'NInput',
      },
    ],
  },
  searchProps: {
    fieldOptions: [
      { value: 'name', label: '姓名' },
      { value: 'age', label: '年龄' },
      { value: 'address', label: '地址' },
    ],
    fieldClass: '!w-80px',
  },
  immediate: true,
  pagination: true,
  onRequest: (params: any): Promise<any> => {
    return new Promise((resolve) => {
      const data = [
        { id: 1, name: '张三', age: 18, address: '北京市' },
        { id: 2, name: '李四', age: 20, address: '上海市' },
        { id: 3, name: '王五', age: 22, address: '广州市' },
      ]
      let result = data
      if (params.field === 'name') {
        result = data.filter((item: any) => item.name.includes(params.keyword))
      }
      setTimeout(() => {
        resolve({
          data: result,
          total: result.length,
        })
      }, 1000)
    })
  },
  columns: [
    { key: 'name', title: '姓名' },
    { key: 'age', title: '年龄' },
    { key: 'address', title: '地址' },
  ],
})
</script>

<template>
  <div class="h-300px">
    <AAdvTable ref="advTableRef" v-bind="advTableProps" :filter-preset="preset">
      <template #action>
        <NRadioGroup v-model:value="preset">
          <NRadio value="drawer">
            Drawer
          </NRadio>
          <NRadio value="modal">
            Modal
          </NRadio>
          <NRadio value="popover">
            Popover
          </NRadio>
        </NRadioGroup>
      </template>
    </AAdvTable>
  </div>
</template>
