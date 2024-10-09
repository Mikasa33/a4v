import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { TableInstance, TableSlots } from '../table'
import type { advTableProps } from './props'

export type AdvTableProps = ExtractPublicPropTypes<typeof advTableProps>

export type AdvTableFilterPresetType = 'drawer' | 'modal' | 'popover'

export interface AdvTableSlots extends Omit<TableSlots, 'header'> {
  action?: () => VNodeChild
  search?: () => VNodeChild
}

export interface AdvTableInstance extends TableInstance {

}
