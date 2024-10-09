import type { PaginationProps } from 'naive-ui'
import type { ColumnKey, DataTableSelectionOptions, Ellipsis, Expandable, Filter, FilterOption, FilterOptionValue, InternalRowData, RenderExpand, RenderFilter, RenderFilterIcon, RenderFilterMenu, RenderSorter, RenderSorterIcon, Sorter, SortOrder, TableBaseColumn, TableColumnGroupTitle, TableColumnTitle, TableExpandColumnTitle } from 'naive-ui/es/data-table/src/interface'
import type { Component, ExtractPublicPropTypes, HTMLAttributes, VNodeChild } from 'vue'
import type { tableProps } from './props'

export type TableProps = ExtractPublicPropTypes<typeof tableProps>

export interface TableColumnProps<T = InternalRowData> {
  align?: 'left' | 'center' | 'right'
  cellProps?: (rowData: T, rowIndex: number) => HTMLAttributes
  children?: Array<TableBaseColumn<T>>
  className?: string
  colSpan?: (rowData: T, rowIndex: number) => number | never
  component?: TableColumnComponentType
  componentProps?: any
  defaultFilterOptionValues?: FilterOptionValue[] | null
  defaultFilterOptionValue?: FilterOptionValue | null
  filterMultiple?: boolean
  defaultSortOrder?: SortOrder
  disabled?: (row: T) => boolean
  ellipsis?: Ellipsis
  ellipsisComponent?: 'ellipsis' | 'performant-ellipsis'
  expandable?: Expandable<T>
  filter?: 'default' | boolean | Filter<T> | never
  filterOptions?: FilterOption[] | never
  filterOptionValues?: FilterOptionValue[] | null | never
  filterOptionValue?: FilterOptionValue | null | never
  filterMode?: 'or' | 'and'
  fixed?: 'left' | 'right'
  key: ColumnKey
  maxWidth?: string | number
  minWidth?: string | number
  multiple?: boolean
  options?: DataTableSelectionOptions<T>
  render?: (rowData: T, rowIndex: number) => VNodeChild
  renderExpand?: RenderExpand<T>
  renderFilter?: RenderFilter
  renderFilterIcon?: RenderFilterIcon
  renderSorter?: RenderSorter
  renderSorterIcon?: RenderSorterIcon
  renderFilterMenu?: RenderFilterMenu
  resizable?: boolean
  rowSpan?: (rowData: T, rowIndex: number) => number | never
  slot?: string
  sorter?: boolean | Sorter<T> | 'default' | never
  sortOrder?: SortOrder
  title?: TableColumnTitle | TableColumnGroupTitle | TableExpandColumnTitle
  titleAlign?: 'left' | 'center' | 'right'
  titleColSpan?: number
  type?: never | 'expand' | 'selection'
  tree?: boolean
  width?: number | string
}

export type TableColumnComponentType =
  | 'NpViewTag'
  | 'NpViewTime'
  | Component

export interface TableSlots {
  header?: () => VNodeChild
  [key: `column-${string}`]: (props: { key: string, row: any, index: number }) => VNodeChild
}

export interface TableInstance {
  getCheckedRowKeys: () => string[]
  getLoading: () => boolean
  getPagination: () => boolean | PaginationProps
  refresh: () => void
  reload: (params?: Record<string, any>) => void
}
