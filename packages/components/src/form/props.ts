import type { FormProps } from 'naive-ui'
import type { PropType } from 'vue'
import type { FormItemComponentType, FormItemProps } from './types'
import { omit } from 'lodash-es'
import { formItemGiProps, gridProps, formProps as nFormProps } from 'naive-ui'
import { makeArrayProp, makeFunctionProp, makeNumericProp, makeObjectProp, makeStringProp, numericProp } from '../utils'

export const formProps = Object.assign({}, gridProps, omit(nFormProps, 'model'), {
  defaultValues: makeObjectProp<Record<string, any>>(),
  giSpan: makeNumericProp(24),
  giSuffixSpan: numericProp,
  items: makeArrayProp<FormItemProps>(),
  requireMarkPlacement: makeStringProp<FormProps['requireMarkPlacement']>('left'),
  value: makeObjectProp<Record<string, any>>(),
  onUpdateValue: makeFunctionProp<(value: any) => void>(),
})

export const formItemProps = Object.assign({}, formItemGiProps, {
  component: [String, Function] as PropType<FormItemComponentType>,
  componentProps: makeObjectProp<any>(),
  defaultValue: Object as PropType<any>,
  show: [Boolean, Function] as PropType<boolean | ((params: { value: object, path: string }) => boolean)>,
  slot: String,
})
