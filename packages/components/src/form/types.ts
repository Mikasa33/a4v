import type { FormValidateCallback, ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import type { Component, ExtractPublicPropTypes, VNodeChild } from 'vue'
import type { formItemProps, formProps } from './props'

export type FormProps = ExtractPublicPropTypes<typeof formProps>

export type FormItemProps = ExtractPublicPropTypes<typeof formItemProps>

export type FormItemComponentType =
  | 'NAutoComplete'
  | 'NCascader'
  | 'NColorPicker'
  | 'NDatePicker'
  | 'NDynamicInput'
  | 'NInput'
  | 'NInputNumber'
  | 'NSelect'
  | 'NSlider'
  | 'NSwitch'
  | 'NTimePicker'
  | 'NTreeSelect'
  | 'ASelect'
  | Component

export interface FormSlots {
  [key: `item-${string}`]: (props: { props: FormItemProps, path: string, value: Record<string, any> }) => VNodeChild
  'gi-suffix'?: (props: { overflow: boolean }) => VNodeChild
}

export interface FormInstance {
  getValue: (path?: string) => Record<string, any> | any
  reset: () => void
  restoreValidation: () => void
  validate: (callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) => Promise<any>
}
