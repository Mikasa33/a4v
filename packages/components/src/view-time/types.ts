import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { viewTimeProps } from './props'

export type ViewTimeProps = ExtractPublicPropTypes<typeof viewTimeProps>

export interface ViewTimeSlots {
  default?: () => VNodeChild
}
