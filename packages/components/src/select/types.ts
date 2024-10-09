import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { selectProps } from './props'

export type SelectProps = ExtractPublicPropTypes<typeof selectProps>

export interface SelectSlots {
  default?: () => VNodeChild
}
