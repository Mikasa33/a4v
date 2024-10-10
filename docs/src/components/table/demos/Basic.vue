<script lang="ts" setup>
import type { TableProps } from '@a4v/components'
import { ATable } from '@a4v/components'
import { NButton } from 'naive-ui'
import { reactive, ref } from 'vue'

const tableRef = ref()
const tableProps = reactive<TableProps>({
  immediate: true,
  onRequest: (): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: '张三', age: 18, address: '北京市' },
            { id: 2, name: '李四', age: 20, address: '上海市' },
            { id: 3, name: '王五', age: 22, address: '广州市' },
          ],
          total: 3,
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
  <div class="mb-12px">
    <NButton @click="tableRef.refresh()">
      刷新
    </NButton>
  </div>
  <ATable ref="tableRef" v-bind="tableProps" class="!h-230px" />
</template>
