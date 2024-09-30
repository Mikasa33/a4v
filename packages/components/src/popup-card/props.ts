import { truthProp } from '@a4v/utils'
import { cardProps } from 'naive-ui'

export const innerPopupCardProps = {
  autoFocus: Boolean,
  bordered: Boolean,
  closable: truthProp,
  fullscreenable: truthProp,
  showFooter: truthProp,
}

export const popupCardProps = Object.assign({}, cardProps, innerPopupCardProps)
