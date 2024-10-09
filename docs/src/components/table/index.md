# 表格 Table

数据表格用来获取异步请求的数据，并展示在表格中。

如果只是想渲染一个表格，建议直接使用 [NDataTable](https://www.naiveui.com/zh-CN/light/components/data-table) 或 [NTable](https://www.naiveui.com/zh-CN/light/components/table)。

::: warning 需使用 flex 布局
`flex-height` 默认为 `true`，表格主体的高度自动适应整个表格区域的高度。
:::

## 演示

### 基础

基础表格。

::: raw
<TableBasic />
:::

::: details 查看代码
<<< ./demos/Basic.vue
:::

### 选中行

可以通过把第一列的类型设为 `selection` 来让行变成可选的，同时支持设置 `multiple=false` 来变成单选模式。

::: raw
<TableCheckedRow />
:::

::: details 查看代码
<<< ./demos/CheckedRow.vue
:::

### 分页

可通过设置 `pagination` 自定义分页。

::: raw
<TablePagination />
:::

::: details 查看代码
<<< ./demos/Pagination.vue
:::

### 禁用分页

设置 `pagination=false` 禁用分页，异步请求数据可直接返回数组。

::: raw
<TableDisabledPagination />
:::

::: details 查看代码
<<< ./demos/DisabledPagination.vue
:::

### 列组件

使用组件自定义表格列。

::: raw
<TableComponent />
:::

::: details 查看代码
<<< ./demos/Component.vue
:::

### 列插槽

使用插槽自定义表格列。优先级 `slot` > `component`。

::: raw
<TableSlotColumn />
:::

::: details 查看代码
<<< ./demos/SlotColumn.vue
:::

### 头部插槽

使用插槽自定义表格头部。

::: raw
<TableSlotHeader />
:::

::: details 查看代码
<<< ./demos/SlotHeader.vue
:::

## API

### Table Props

支持 [NDataTable](https://www.naiveui.com/zh-CN/light/components/data-table#DataTable-Props) 除 `flex-height` 和 `remote` 外的所有属性。

| 名称              | 说明                                                 | 类型                                            | 默认值      |
| ----------------- | ---------------------------------------------------- | ----------------------------------------------- | ----------- |
| data-field        | 替代请求数据中的 `data` 字段名                       | `string`                                        | `data`      |
| immediate         | 是否立即请求数据                                     | `boolean`                                       | `false`     |
| pagination        | 是否显示分页，支持传入对象自定义分页配置             | `boolean \| NPaginationProps`                   | `true`      |
| row-key           | 通过行数据创建行的 key（如果你不想给每一行加上 key） | `(row: any) => number \| string`                | `row.id`    |
| total-field       | 替代请求数据中的 `total` 字段名                      | `string`                                        | `total`     |
| on-request        | 异步请求数据的回调函数                               | `(params: Record<string, any>) => Promise<any>` | `undefined` |
| on-update:loading | `loading` 状态改变时触发的回调函数                   | `(loading: boolean) => void`                    | `undefined` |

### TableColumn Props

支持 [NDataTableColumn](https://www.naiveui.com/zh-CN/light/components/data-table#DataTable-Props) 所有属性。

| 名称            | 说明                                                                          | 类型                         | 默认值      |
| --------------- | ----------------------------------------------------------------------------- | ---------------------------- | ----------- |
| component       | 组件或组件名称，类型参考 [TableColumnComponent Type](#formitemcomponent-type) | `NpTableColumnComponentType` | `undefined` |
| component-props | 组件 props                                                                    | `any`                        | `undefined` |
| slot            | 插槽名称，优先级大于 `key` 属性对应的插槽                                     | `string`                     | `undefined` |

### TableColumnComponent Type

```ts
import type { Component } from 'vue'

type NpTableColumnComponentType =
  | 'NpViewTag'
  | 'NpViewTime'
  | Component
```

### Table Methods

支持 [NTable](https://www.naiveui.com/zh-CN/light/components/data-table#DataTable-Methods) 所有方法。

| 名称              | 说明                           | 类型                                     |
| ----------------- | ------------------------------ | ---------------------------------------- |
| getCheckedRowKeys | 获取被选中的行的 key           | `() => Array<number \| string>`          |
| getLoading        | 获取是否显示 `loading` 状态    | `() => boolean`                          |
| getPagination     | 获取分页数据                   | `() => NPaginationProps`                 |
| refresh           | 刷新表格数据                   | `() => void`                             |
| reload            | 重置页码，根据条件加载表格数据 | `(params?: Record<string, any>) => void` |

### Table Slots

| 名称            | 说明       | 参数                                         |
| --------------- | ---------- | -------------------------------------------- |
| header          | 头部内容   | `()`                                         |
| column-$\{key\} | 表格列内容 | `({ key: string, row: any, index: number })` |
