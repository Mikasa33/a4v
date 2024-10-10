<script setup lang="tsx">
import type { DropdownOption, TreeOption } from 'naive-ui'
import type { AdvTreeSlots } from './types'
import { Icon } from '@iconify/vue'
import { isNil, isString } from 'lodash-es'
import { NButton, NDropdown, NEl, NFlex, NText, NTooltip } from 'naive-ui'
import { ref } from 'vue'
import { ADrawer } from '../drawer'
import { AFlex1 } from '../flex'
import { AForm } from '../form'
import { AModal } from '../modal'
import { APopover } from '../popover'
import { ASearchKeyword } from '../search-keyword'
import { ATree } from '../tree'
import { treeProps as ATreeProps } from '../tree/props'
import { pickProps } from '../utils'
import { cssr } from './cssr'
import { advTreeProps } from './props'

const props = defineProps(advTreeProps)
const emits = defineEmits<{
  edit: [node: any]
  delete: [node: any]
}>()
defineSlots<AdvTreeSlots>()

const treeRef = ref()
const formRef = ref()

const treeProps = pickProps(props, ATreeProps)
const title = '筛选'

const filterShow = ref(false)
const loading = ref(false)
const searchValue = ref<any>({
  keyword: null,
  field: null,
})
const filterValue = ref<any>({})

function getMergeParams(params: Record<string, any>) {
  const result = {
    ...params,
    ...filterValue.value,
  }
  if (isNil(searchValue.value.keyword) || searchValue.value.keyword === '') {
    return result
  }
  return {
    ...result,
    ...searchValue.value,
  }
}

async function onRequest(params: Record<string, any>) {
  return props?.onRequest?.(getMergeParams(params))
}

function handleCancel() {
  filterShow.value = false
}
function handleReset() {
  formRef.value.reset()
}
function handleSearch() {
  filterShow.value = false
  treeRef.value.reload()
}
function handleClickFilterBtn() {
  if (props.filterPreset !== 'popover') {
    filterShow.value = true
  }
}
function handleRefresh() {
  treeRef.value.reload()
}
function handleSelectDropdown(key: string | number, _: DropdownOption, node: { option: TreeOption, checked: boolean, selected: boolean }) {
  emits(key as any, node)
}

function renderSuffix(node: { option: TreeOption, checked: boolean, selected: boolean }) {
  const options = props.nodeActions.map((item) => {
    if (isString(item)) {
      return {
        key: item,
        label: item === 'edit' ? '编辑' : item === 'delete' ? () => <NText type="error">删除</NText> : '操作',
      }
    }
    return item
  })

  return (
    <NDropdown
      trigger="click"
      options={options}
      placement="bottom-end"
      class="a-adv-tree__dropdown"
      onSelect={(key, option) => handleSelectDropdown(key, option, node)}
    >
      <div
        class="a-adv-tree__icon"
        onClick={e => e.stopPropagation()}
      >
        <Icon icon="icon-park-outline:more-one" />
      </div>
    </NDropdown>
  )
}
function Btn({ icon, onClick, ...props }: { icon: string, onClick: () => void }) {
  return (
    <NButton
      {...props}
      class="a-adv-tree__button"
      onClick={onClick}
    >
      <Icon icon={icon} />
    </NButton>
  )
}
function FilterBtn(innerProps: any) {
  if (props.filterPreset === 'popover') {
    return (
      <APopover
        title={title}
        {...props.filterPopupProps as any}
        v-model:show={filterShow.value}
        trigger="click"
        v-slots={{
          trigger: Btn(innerProps),
          footer: PopupCardBtns,
        }}
      >
        {Form()}
      </APopover>
    )
  }
  return Btn(innerProps)
}
function Form() {
  return (
    <AForm
      ref={formRef}
      {...props.filterFormProps}
      showFeedback={false}
      yGap={props.filterFormProps.yGap ?? 16}
      value={filterValue.value}
      onUpdateValue={(val: any) => filterValue.value = val}
    />
  )
}
function PopupCardBtns() {
  return (
    <NFlex justify="end">
      <NButton onClick={handleCancel}>
        取消
      </NButton>
      <NButton onClick={handleReset}>
        重置
      </NButton>
      <NButton
        type="primary"
        onClick={handleSearch}
      >
        确认
      </NButton>
    </NFlex>
  )
}

cssr.mount()
</script>

<template>
  <NEl
    class="a-adv-tree"
    :style="{ backgroundColor: 'var(--card-color)' }"
  >
    <ATree
      ref="treeRef"
      v-bind="treeProps"
      :on-request
      :render-suffix
      class="a-adv-tree__tree"
    >
      <template #header>
        <slot name="action" />

        <ASearchKeyword
          v-if="searchable"
          v-bind="(searchProps as any)"
          v-model:value="searchValue.keyword"
          v-model:field="searchValue.field"
          :disabled="loading"
          class="a-adv-tree__search-keyword"
          @search="handleSearch"
        />
        <AFlex1 v-else />

        <template v-if="filterable">
          <NTooltip>
            <template #trigger>
              <div>
                <FilterBtn icon="icon-park-outline:filter" @click="handleClickFilterBtn" />
              </div>
            </template>
            筛选
          </NTooltip>

          <Component
            :is="filterPreset === 'drawer' ? ADrawer : filterPreset === 'modal' ? AModal : null"
            v-model:show="filterShow"
            :title
            v-bind="(filterPopupProps as any)"
            @confirm="handleSearch"
          >
            <Form />

            <template #footer>
              <PopupCardBtns />
            </template>
          </Component>
        </template>

        <template v-if="refreshable">
          <NTooltip>
            <template #trigger>
              <Btn icon="icon-park-outline:refresh" @click="handleRefresh" />
            </template>
            刷新
          </NTooltip>
        </template>
      </template>
    </ATree>
  </NEl>
</template>
