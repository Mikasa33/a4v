<script setup lang="tsx">
import type { AdvTableProps } from '@a4v/components'
import { AAdvTable } from '@a4v/components'
import { NButton } from 'naive-ui'
import { ref } from 'vue'

const advTableRef = ref()
const advTableProps: AdvTableProps = {
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
  // 优先级不如 slot
  columnActions: [
    <NButton tertiary size="small">编辑</NButton>,
    <NButton tertiary size="small">组件</NButton>,
    'delete',
  ],
}
</script>

<template>
  <div class="h-300px">
    <AAdvTable ref="advTableRef" v-bind="advTableProps">
      <!-- 优先级最高 -->
      <template #column-action="{ row, index }">
        {{ index === 0 ? row : '...' }}
      </template>
    </AAdvTable>
  </div>
</template>
