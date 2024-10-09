import type { ExtractPublicPropTypes } from 'vue'
import type { PopupCardSlots } from '../popup-card'
import type { modalProps } from './props'

export type ModalProps = ExtractPublicPropTypes<typeof modalProps>

export interface ModalSlots extends PopupCardSlots {}
