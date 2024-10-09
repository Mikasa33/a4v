import type { SelectGroupOption, SelectOption } from 'naive-ui'
import type { PropType } from 'vue'
import { selectProps as nSelectProps } from 'naive-ui'
import { makeFunctionProp } from '../utils'

export const selectProps = Object.assign({}, nSelectProps, {
  immediate: Boolean,
  onRequest: Function as PropType<(params?: Record<string, any>) => Promise<Array<SelectOption | SelectGroupOption>>>,
  onUpdateLoading: makeFunctionProp<(loading: boolean) => void>(),
  onUpdateOptions: makeFunctionProp<(options: Array<SelectOption | SelectGroupOption>) => void>(),
})
