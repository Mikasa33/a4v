import type { PropType } from 'vue'
import type { DrawerProps } from '../drawer'
import type { ModalProps } from '../modal'
import type { AdvFormPopupPresetType } from './types'
import { formProps } from '../form'
import { popupCardProps } from '../popup-card'
import { makeNumericProp, makeObjectProp } from '../utils'

export const advFormProps = Object.assign({}, formProps, {
  popupProps: makeObjectProp<DrawerProps | ModalProps>(),
  preset: {
    type: String as PropType<AdvFormPopupPresetType>,
    default: 'drawer',
  },
  title: popupCardProps.title,
  width: makeNumericProp(500),
})
