import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { configProviderProps } from './props'

export type ConfigProviderProps = ExtractPublicPropTypes<typeof configProviderProps>

export interface ConfigProviderSlots {
  default?: () => VNodeChild
}
