import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { PopupCardSlots } from '../popup-card'
import type { popoverProps } from './props'

export type PopoverProps = ExtractPublicPropTypes<typeof popoverProps>

export interface PopoverSlots extends PopupCardSlots {
  trigger: () => VNodeChild
}
