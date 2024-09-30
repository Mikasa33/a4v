import { makeNumericProp } from '@a4v/utils'
import { drawerProps as nDrawerProps } from 'naive-ui'
import { innerPopupCardProps, popupCardProps } from '../popup-card'

export const drawerProps = Object.assign({}, popupCardProps, nDrawerProps, innerPopupCardProps, {
  width: makeNumericProp(300),
})
