import { configProviderProps as nConfigProviderProps } from 'naive-ui'
import { truthProp } from '../utils'

export const configProviderProps = Object.assign({}, nConfigProviderProps, {
  globalStyle: truthProp,
})
