<script lang="ts" setup>
import type { TableProps } from '@a4v/components'
import { AFlex1, ATable } from '@a4v/components'
import { NButton, NInput, NInputGroup } from 'naive-ui'
import { reactive, ref } from 'vue'

const tableRef = ref()
const tableProps = reactive<TableProps>({
  immediate: true,
  onRequest: (params?: Record<string, any>): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: '张三', age: 18, birthday: 1072886400000 },
            { id: 2, name: '李四', age: 19, birthday: 1041350400000 },
            { id: 3, name: '王五', age: 20, birthday: 1009814400000 },
          ].filter((item: any) => !params?.keyword || item.name.includes(params.keyword)),
          total: 3,
        })
      }, 1000)
    })
  },
  columns: [
    { key: 'name', title: '姓名' },
    { key: 'age', title: '年龄' },
    { key: 'birthday', title: '出生日期' },
  ],
})
const keyword = ref('')
</script>

<template>
  <ATable
    ref="tableRef"
    v-bind="tableProps"
    class="h-230px"
  >
    <template #header>
      <NButton type="primary">
        新增
      </NButton>
      <AFlex1 />
      <div>
        <NInputGroup>
          <NInput
            v-model:value="keyword"
            placeholder="请输入搜索关键词"
            clearable
          />
          <NButton @click="tableRef?.reload({ keyword })">
            搜索
          </NButton>
        </NInputGroup>
      </div>
    </template>
  </ATable>
</template>
