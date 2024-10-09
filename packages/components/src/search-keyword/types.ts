import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { searchKeywordProps } from './props'

export type SearchKeywordProps = ExtractPublicPropTypes<typeof searchKeywordProps>

export interface SearchKeywordSlots {
  'input-prefix'?: () => VNodeChild
}
