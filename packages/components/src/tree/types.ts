import type { TreeOption } from 'naive-ui'
import type { ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { treeProps } from './props'

export type TreeProps = ExtractPublicPropTypes<typeof treeProps>

export interface TreeSlots {
  empty?: () => VNodeChild
  header?: () => VNodeChild
  [key: `label-${string}`]: (props: { option: TreeOption, checked: boolean, selected: boolean }) => VNodeChild
  [key: `prefix-${string}`]: (props: { option: TreeOption, checked: boolean, selected: boolean }) => VNodeChild
  [key: `suffix-${string}`]: (props: { option: TreeOption, checked: boolean, selected: boolean }) => VNodeChild
}
