<script setup lang="tsx">
import type { TreeOption, TreeProps } from 'naive-ui'
import type { TreeSlots } from './types'
import { isArray } from 'lodash-es'
import { NEmpty, NFlex, NSpin, NTree, treeProps as nTreeProps } from 'naive-ui'
import { useRequest } from '../composables/useRequest'
import { useSlotsFilter } from '../composables/useSlotsFilter'
import { pickProps } from '../utils'
import { treeProps } from './props'

const props = defineProps(treeProps)
const slots = defineSlots<TreeSlots>()

const checkedKeys = defineModel<Array<number | string>>('checkedKeys', { default: () => [] })
const data = defineModel<Array<TreeOption>>('data', { default: () => [] })
const expandedKeys = defineModel<Array<number | string>>('expandedKeys', { default: () => [] })
const loading = defineModel<boolean>('loading', { default: false })
const selectedKeys = defineModel<Array<number | string>>('selectedKeys', { default: () => [] })

const pickedTreeProps = pickProps<TreeProps>(props, nTreeProps)

const { slotKeys } = useSlotsFilter((key: string) => key.includes('label-'))
const { execute } = useRequest(props.onRequest, {
  data,
  immediate: props.immediate,
  loading,
  hook: (data: any) => {
    if (isArray(data)) {
      return data
    }
    return []
  },
})

function renderLabel(node: { option: TreeOption, checked: boolean, selected: boolean }) {
  const slotKey = slotKeys.value.find((key: string) => key.replace('label-', '') === node.option.key)
  // 插槽，优先级最高
  if (slotKey) {
    return (slots as any)[slotKey](node)
  }
  // 节点内容的渲染函数
  if (props.renderLabel) {
    return props.renderLabel(node)
  }
  // 节点内容
  return node.option[props.labelField]
}
function renderPrefix(node: { option: TreeOption, checked: boolean, selected: boolean }) {
  const slotKey = slotKeys.value.find((key: string) => key.replace('prefix-', '') === node.option.key)
  // 插槽，优先级最高
  if (slotKey) {
    return (slots as any)[slotKey](node)
  }
  // 节点前缀内容的渲染函数
  if (props.renderPrefix) {
    return props.renderPrefix(node)
  }
  // 节点前缀内容
  return node.option.prefix
}
function renderSuffix(node: { option: TreeOption, checked: boolean, selected: boolean }) {
  const slotKey = slotKeys.value.find((key: string) => key.replace('suffix-', '') === node.option.key)
  // 插槽，优先级最高
  if (slotKey) {
    return (slots as any)[slotKey](node)
  }
  // 节点后缀内容的渲染函数
  if (props.renderSuffix) {
    return props.renderSuffix(node)
  }
  // 节点后缀内容
  return node.option.suffix
}

defineExpose({
  reload: execute,
})
</script>

<template>
  <div class="wh-full flex flex-col">
    <!-- 头部插槽 -->
    <NFlex v-if="slots.header" align="center" class="mb-8px">
      <slot name="header" />
    </NFlex>
    <NSpin :show="loading" size="small">
      <NTree
        v-bind="pickedTreeProps"
        v-model:checked-keys="checkedKeys"
        v-model:expanded-keys="expandedKeys"
        v-model:selected-keys="selectedKeys"
        v-model:data="data"
        :render-label="renderLabel"
        :render-prefix="renderPrefix"
        :render-suffix="renderSuffix"
        :class="{ 'opacity-50 pointer-events-none': loading }"
      >
        <!-- 树组件无数据时的插槽 -->
        <template #empty>
          <div :class="{ 'opacity-0': loading }">
            <slot v-if="slots.empty" name="empty" />
            <NEmpty v-else />
          </div>
        </template>
      </NTree>
    </NSpin>
  </div>
</template>
