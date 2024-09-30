import { withInstall } from '@a4v/utils'
import _ConfigProvider from './ConfigProvider.vue'

export const AConfigProvider = withInstall(_ConfigProvider)
export default _ConfigProvider
export * from './global'
export { configProviderProps } from './props'
export type * from './types'
