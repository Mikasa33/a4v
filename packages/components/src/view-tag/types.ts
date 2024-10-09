import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { viewTagProps } from './props'

export type ViewTagProps = ExtractPublicPropTypes<typeof viewTagProps>

export interface ViewTagSlots {
  default?: () => VNodeChild
}
