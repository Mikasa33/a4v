import { drawerProps as nDrawerProps } from 'naive-ui'
import { innerPopupCardProps, popupCardProps } from '../popup-card'
import { makeNumericProp } from '../utils'

export const modalProps = Object.assign({}, popupCardProps, nDrawerProps, innerPopupCardProps, {
  width: makeNumericProp(500),
})
