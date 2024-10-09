<script lang="ts" setup>
import type { TableProps } from '@a4v/components'
import { ATable } from '@a4v/components'
import { reactive } from 'vue'

const tableProps = reactive<TableProps>({
  immediate: true,
  onRequest: (): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: '张三', age: 18, birthday: 1072886400000 },
            { id: 2, name: '李四', age: 19, birthday: 1041350400000 },
            { id: 3, name: '王五', age: 20, birthday: 1009814400000 },
          ],
          total: 3,
        })
      }, 1000)
    })
  },
  columns: [
    { key: 'name', title: '姓名' },
    {
      key: 'age',
      title: '年龄',
      slot: 'ageeee',
    },
    {
      key: 'birthday',
      title: '出生日期',
      // 优先级低于插槽
      component: 'AViewTime',
    },
  ],
})
</script>

<template>
  <ATable
    v-bind="tableProps"
    class="h-230px"
  >
    <!-- 插槽优先级 slot > key -->
    <template #column-age="{ row }">
      age {{ row.age }}
    </template>
    <template #column-ageeee="{ row }">
      ageeee {{ row.age }}
    </template>
    <template #column-birthday="{ key, row }">
      {{ row.birthday === 1041350400000 ? '列插槽' : '' }} {{ row[key] }}
    </template>
  </ATable>
</template>
