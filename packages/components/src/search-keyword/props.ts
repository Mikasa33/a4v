import type { SelectOption } from 'naive-ui'
import type { PropType } from 'vue'
import { inputProps } from 'naive-ui'
import { makeArrayProp, makeNumberProp, makeStringProp, numericProp, truthProp } from '../utils'

export const searchKeywordProps = Object.assign({}, inputProps, {
  clearable: truthProp,
  debounce: makeNumberProp(500),
  field: numericProp,
  fieldClass: String,
  fieldOptions: makeArrayProp<SelectOption>(),
  inputClass: String,
  placeholder: makeStringProp('请输入关键词'),
  value: String,
  onSearch: Function as PropType<(value: string | null, field: string | number | null) => void>,
  onUpdateField: Function as PropType<(value: string) => void>,
  onUpdateValue: Function as PropType<(value: string) => void>,
})
