<script setup lang="ts">
import type { FormInst, FormProps, GridProps } from 'naive-ui'
import type { FormValidateCallback, ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import type { FormInstance, FormItemProps, FormSlots } from './types'
import { getMaybeFuncValue } from '@a4v/utils'
import { useArrayFilter } from '@vueuse/core'
import { get, isString } from 'lodash-es'
import { formItemGiProps, gridProps, NForm, NFormItemGi, formProps as nFormProps, NGi, NGrid } from 'naive-ui'
import { ref } from 'vue'
import { pickProps } from '../utils'
import { components } from './components'
import { formProps } from './props'
import { useValue } from './use-value'

const props = defineProps(formProps)
const slots = defineSlots<FormSlots>()

const value = defineModel<Record<string, any>>('value', { default: () => ({}) })

const pickedFormProps = pickProps<FormProps>(props, nFormProps)
const pickedGridProps = pickProps<GridProps>(props, gridProps)

const formRef = ref<FormInst>()
const formItems = useArrayFilter(props.items!, (item: FormItemProps) => !!item.path && (getMaybeFuncValue(item.show, { value: value.value, path: item.path }) ?? true))
const slotItems = useArrayFilter(props.items!, (item: FormItemProps) => (!!item.path || !!item.slot) && (getMaybeFuncValue(item.show, { value: value.value, path: item.path }) ?? true))

const { reset: resetValue } = useValue(props, value, formItems)

function mergeFormItemGiProps(item: FormItemProps) {
  const pickedProps = pickProps<FormItemProps>(item, formItemGiProps)
  return {
    ...pickedProps,
    // 栅格占据的列数，默认为 24
    span: item.span ?? props.giSpan,
  }
}

function renderComponent(item: FormItemProps) {
  return isString(item.component) ? components[item.component] : item.component
}

function getValue(path?: string) {
  if (path) {
    return get(value.value, path)
  }
  return value.value
}

function reset() {
  // 重置默认值
  resetValue()
  // 还原到未校验的状态
  restoreValidation()
}
function restoreValidation() {
  return formRef.value?.restoreValidation()
}
function validate(callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied): Promise<any> {
  return formRef.value?.validate(callback, shouldRuleBeApplied) as any
}

defineExpose<FormInstance>({
  getValue,
  reset,
  restoreValidation,
  validate,
})
</script>

<template>
  <NForm ref="formRef" v-bind="pickedFormProps" :model="value">
    <NGrid v-bind="pickedGridProps">
      <NFormItemGi v-for="item in slotItems" :key="item.path" v-bind="mergeFormItemGiProps(item)">
        <!-- 优先级 slot > path -->
        <slot
          v-if="slots[`item-${item.slot}`]"
          :name="`item-${item.slot}`"
          :props="item"
          :path="item.path!"
          :value
        />
        <slot
          v-else-if="slots[`item-${item.path}`]"
          :name="`item-${item.path}`"
          :props="item"
          :path="item.path!"
          :value
        />
        <Component
          :is="renderComponent(item)"
          v-else
          v-model:value="value[item.path!]"
          v-bind="item.componentProps"
        />
      </NFormItemGi>
      <NGi v-if="slots['gi-suffix']" :span="giSuffixSpan ?? giSpan" suffix #="{ overflow }">
        <slot name="gi-suffix" :overflow />
      </NGi>
    </NGrid>
  </NForm>
</template>
