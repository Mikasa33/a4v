import type { MaybeRefOrGetter, Ref } from 'vue'
import type { FormItemProps, FormProps } from './types'
import { isUndefined } from 'lodash-es'
import { computed, toValue } from 'vue'

/**
 * 表单数据
 * @param props 表单属性
 * @param value 表单数据
 * @param items 表单项
 */
export function useValue(props: FormProps, value: Ref<any>, items: MaybeRefOrGetter<FormItemProps[]>) {
  // 默认数据
  const defaultValues = computed<any>(() => {
    const defaultValues = props.defaultValues ?? {}
    const values: Record<string, any> = {}
    for (const item of toValue(items)) {
      // item.defaultValue > props.defaultValues
      values[item.path!] = item.defaultValue ?? defaultValues[item.path!] ?? null
    }
    return values
  })
  /**
   * 初始化表单数据
   */
  function init() {
    for (const item of toValue(items)) {
      // 是 undefined 就会设置默认值
      // value > item.defaultValue > props.defaultValues
      if (isUndefined(value.value[item.path!])) {
        value.value[item.path!] = defaultValues.value[item.path!] ?? null
      }
    }
  }
  /**
   * 重置表单值
   */
  function reset() {
    for (const item of toValue(items)) {
      value.value[item.path!] = defaultValues.value[item.path!] ?? null
    }
  }

  // 初始化表单数据
  init()

  return {
    defaultValues,
    value,
    reset,
  }
}
