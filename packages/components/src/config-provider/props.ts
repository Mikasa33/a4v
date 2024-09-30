import { truthProp } from '@a4v/utils'
import { configProviderProps as nConfigProviderProps } from 'naive-ui'

export const configProviderProps = Object.assign({}, nConfigProviderProps, {
  globalStyle: truthProp,
})
