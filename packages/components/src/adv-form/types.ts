import type { ExtractPublicPropTypes } from 'vue'
import type { FormInstance, FormSlots } from '../form'
import type { advFormProps } from './props'

export type AdvFormProps = ExtractPublicPropTypes<typeof advFormProps>

export interface AdvFormSlots extends FormSlots {
}

export type AdvFormPopupPresetType = 'drawer' | 'modal'

export interface AdvFormInstance extends FormInstance {

}
