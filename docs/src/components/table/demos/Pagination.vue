<script lang="ts" setup>
import type { TableProps } from '@a4v/components'
import { ATable } from '@a4v/components'
import { reactive } from 'vue'

const tableProps = reactive<TableProps>({
  immediate: true,
  onRequest: (params: any): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: params.page === 1
            ? [
                { id: 1, name: '张三', age: 18, address: '北京市' },
                { id: 2, name: '李四', age: 20, address: '上海市' },
                { id: 3, name: '王五', age: 22, address: '广州市' },
                { id: 4, name: '赵六', age: 24, address: '深圳市' },
                { id: 5, name: '钱七', age: 26, address: '杭州市' },
              ]
            : [
                { id: 6, name: '孙八', age: 28, address: '南京市' },
                { id: 7, name: '周九', age: 30, address: '武汉市' },
                { id: 8, name: '吴十', age: 32, address: '成都市' },
                { id: 9, name: '郑十一', age: 34, address: '重庆市' },
                { id: 10, name: '王十二', age: 36, address: '天津市' },
              ],
          total: 10,
        })
      }, 1000)
    })
  },
  columns: [
    { key: 'name', title: '姓名' },
    { key: 'age', title: '年龄' },
    { key: 'address', title: '地址' },
  ],
  pagination: {
    pageSizes: [5, 10, 20, 50],
    pageSize: 5,
    showQuickJumper: false,
  },
})
</script>

<template>
  <ATable v-bind="tableProps" class="!h-230px" />
</template>
