<script setup lang="ts">
import type { DataTableColumns, DataTableProps, PaginationProps } from 'naive-ui'
import type { TableColumnProps, TableSlots } from './types'
import { cloneDeep, isArray, isObject, isString } from 'lodash-es'
import { dataTableProps, NDataTable, NFlex } from 'naive-ui'
import { computed, h, ref } from 'vue'
import { useRequest } from '../composables/useRequest'
import { useSlotsFilter } from '../composables/useSlotsFilter'
import { pickProps } from '../utils'
import { components } from './components'
import { tableProps } from './props'

const props = defineProps(tableProps)
const slots = defineSlots<TableSlots>()

const checkedRowKeys = defineModel<Array<number | string>>('checkedRowKeys', { default: () => ([]) })
const data = defineModel<Array<Record<string, any>>>('data', { default: () => [] })
const loading = defineModel<boolean>('loading', { default: false })

const pickedTableProps = pickProps<DataTableProps>(props, dataTableProps)

const { slotKeys } = useSlotsFilter((key: string) => key.includes('column-'))
const columns = computed(() => {
  const columns = cloneDeep(props.columns ?? [])
  for (const column of columns) {
    const { key, slot, component } = column
    if (!key && !slot) {
      continue
    }

    function renderColumn(slotKey: string) {
      if (slotKeys.value.includes(slotKey)) {
        column.render = (row: any, index: number) => (slots as any)[slotKey]?.({ key, row, index })
        return true
      }
      return false
    }

    // 插槽，优先级最高，slot > key
    let slotKey: string = `column-${slot}`
    if (renderColumn(slotKey)) {
      continue
    }
    slotKey = `column-${key}`
    if (renderColumn(slotKey)) {
      continue
    }

    // 自定义组件
    if (component) {
      column.render = (row: any) => renderComponent(column, row)
    }
  }
  return columns as DataTableColumns
})
const paginationRef = ref({
  itemCount: 0,
  // 分页大小，默认 10
  pageSize: 10,
  page: 1,
})
const pagination = computed(() => {
  if (!props.pagination) {
    return false
  }
  const { itemCount, pageSize, page } = paginationRef.value
  return {
    itemCount,
    // 每页条数，默认 10, 20, 50, 100
    pageSizes: [10, 20, 50, 100],
    pageSize,
    // 是否显示快速跳转，默认 true
    showQuickJumper: true,
    // 是否显示每页条数的选择器，默认 true
    showSizePicker: true,
    ...(props.pagination as any),
    page,
    onUpdatePage,
    onUpdatePageSize,
  }
})
const requestParams = computed(() => {
  const { pageSize, page } = paginationRef.value
  return {
    pageSize,
    page,
  }
})
const { execute } = useRequest(
  (params: Record<string, any>) => props.onRequest!({ ...requestParams.value, ...params }),
  {
    data,
    immediate: props.immediate,
    loading,
    hook: (data: any) => {
      if (isArray(data)) {
        return data
      }
      else if (isObject(data)) {
        paginationRef.value.itemCount = (data as any)?.[props.totalField]
        return (data as any)?.[props.dataField]
      }
      return []
    },
  },
)

function onUpdatePage(page: number) {
  (props.pagination as any).onUpdatePage?.(page)
  paginationRef.value.page = page
  execute()
}
function onUpdatePageSize(pageSize: number) {
  (props.pagination as any).onUpdatePageSize?.(pageSize)
  paginationRef.value.pageSize = pageSize
  reload()
}

function rowKey(row: any) {
  if (props.rowKey) {
    return props.rowKey(row)
  }
  // 默认使用 id
  return row.id
}

function renderComponent(column: TableColumnProps, row: any) {
  const { key, component, componentProps } = column
  return h(
    isString(component) ? components[component] : component!,
    {
      ...componentProps,
      value: row[key!],
    },
  )
}

function reload(params?: Record<string, any>) {
  paginationRef.value.page = 1
  execute(params)
}

function getCheckedRowKeys(): Array<number | string> {
  return checkedRowKeys.value
}
function getLoading(): boolean {
  return loading.value
}
function getPagination(): boolean | PaginationProps {
  return pagination.value
}

defineExpose({
  getCheckedRowKeys,
  getLoading,
  getPagination,
  refresh: execute,
  reload,
})
</script>

<template>
  <div class="wh-full flex flex-col">
    <!-- 头部插槽 -->
    <NFlex v-if="slots.header" align="center" class="mb-12px">
      <slot name="header" />
    </NFlex>
    <NDataTable
      v-bind="pickedTableProps"
      v-model:checked-row-keys="checkedRowKeys"
      :data
      :columns
      flex-height
      :loading
      :pagination
      remote
      :row-key="rowKey"
      class="flex-1"
    />
  </div>
</template>
