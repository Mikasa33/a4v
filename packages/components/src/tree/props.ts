import type { TreeOption } from 'naive-ui'
import type { PropType } from 'vue'
import { treeProps as nTreeProps } from 'naive-ui'
import { makeFunctionProp } from '../utils'

export const treeProps = Object.assign({}, nTreeProps, {
  immediate: Boolean,
  loading: Boolean,
  onRequest: Function as PropType<(params: Record<string, any>) => Promise<TreeOption[]>>,
  onUpdateData: makeFunctionProp<(options: Array<TreeOption>) => void>(),
  onUpdateLoading: makeFunctionProp<(loading: boolean) => void>(),
})
