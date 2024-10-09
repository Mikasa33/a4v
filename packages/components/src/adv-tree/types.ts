import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { TreeSlots } from '../tree'
import type { advTreeProps } from './props'

export type AdvTreeProps = ExtractPublicPropTypes<typeof advTreeProps>

export interface AdvTreeSlots extends TreeSlots {
  action?: () => VNodeChild
}
