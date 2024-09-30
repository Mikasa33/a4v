import type { ExtractPublicPropTypes } from 'vue'
import type { PopupCardSlots } from '../popup-card'
import type { drawerProps } from './props'

export type DrawerProps = ExtractPublicPropTypes<typeof drawerProps>

export interface DrawerSlots extends PopupCardSlots {}
