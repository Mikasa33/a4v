import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { popupCardProps } from './props'

export type PopupCardProps = ExtractPublicPropTypes<typeof popupCardProps>

export interface PopupCardSlots {
  'default'?: () => VNodeChild
  'footer'?: () => VNodeChild
  'header-extra'?: () => VNodeChild
}
