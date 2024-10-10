<script setup lang="tsx">
import type { AdvTableInstance, AdvTableSlots } from './types'
import { Icon } from '@iconify/vue'
import { isNil, isString } from 'lodash-es'
import { NButton, NEl, NFlex, NTooltip } from 'naive-ui'
import { computed, ref } from 'vue'
import { useFullscreen } from '../composables/useFullscreen'
import { useSlotsFilter } from '../composables/useSlotsFilter'
import { ADrawer } from '../drawer'
import { AFlex1 } from '../flex'
import { AForm } from '../form'
import { AModal } from '../modal'
import { APopover } from '../popover'
import { ASearchKeyword } from '../search-keyword'
import { ATable, tableProps as ATableProps } from '../table'
import { pickProps } from '../utils'
import { cssr } from './cssr'
import { advTableProps } from './props'

const props = defineProps(advTableProps)
const emits = defineEmits<{
  edit: [row: any]
  delete: [row: any]
}>()
const slots = defineSlots<AdvTableSlots>()

const tableProps = pickProps(props, ATableProps)
const title = '筛选'
const columns = computed(() => {
  return [
    ...props.columns!,
    {
      key: 'action',
      title: '操作',
      render(row: any) {
        return (
          <NFlex>
            {props.columnActions.map((item) => {
              if (isString(item)) {
                return (
                  <NButton
                    type={item === 'edit' ? 'primary' : item === 'delete' ? 'error' : 'default'}
                    tertiary
                    size="small"
                    onClick={() => emits(item as any, row)}
                  >
                    {item === 'edit' ? '编辑' : item === 'delete' ? '删除' : '查看'}
                  </NButton>
                )
              }
              return item
            })}
          </NFlex>
        )
      },
    },
  ]
})

const { slotKeys } = useSlotsFilter((key: string) => key.includes('column-'))

const wrapRef = ref()
const tableRef = ref()
const formRef = ref()

const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(wrapRef)
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
  tableRef.value.reload()
}
function handleClickFilterBtn() {
  if (props.filterPreset !== 'popover') {
    filterShow.value = true
  }
}

function Btn({ icon, onClick, ...props }: { icon: string, onClick: () => void }) {
  return (
    <NButton
      {...props}
      class="a-adv-table__button"
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

defineExpose<AdvTableInstance>({
  ...tableRef.value,
})
</script>

<template>
  <NEl
    ref="wrapRef"
    class="a-adv-table"
    :class="{ 'a-adv-table--fullscreen': isFullscreen }"
    :style="{ backgroundColor: 'var(--card-color)' }"
  >
    <ATable
      ref="tableRef"
      v-bind="tableProps"
      v-model:loading="loading"
      :columns
      flex-height
      :on-request
      class="a-adv-table__table"
    >
      <template v-if="(searchable || filterable || refreshable || fullscreenable || slots.action || slots.search)" #header>
        <NFlex align="center" :wrap="false">
          <slot name="action" />
        </NFlex>

        <AFlex1 />

        <NFlex align="center" :wrap="false">
          <slot name="search" />

          <ASearchKeyword
            v-if="searchable"
            v-bind="(searchProps as any)"
            v-model:value="searchValue.keyword"
            v-model:field="searchValue.field"
            :disabled="loading"
            @search="handleSearch"
          />

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
                <Btn icon="icon-park-outline:refresh" @click="() => tableRef.refresh()" />
              </template>
              刷新
            </NTooltip>
          </template>

          <template v-if="fullscreenable">
            <NTooltip>
              <template #trigger>
                <Btn :icon="isFullscreen ? 'icon-park-outline:off-screen' : 'icon-park-outline:full-screen'" @click="toggleFullscreen" />
              </template>
              {{ isFullscreen ? '还原' : '全屏' }}
            </NTooltip>
          </template>
        </NFlex>
      </template>

      <template v-for="slot in slotKeys" :key="slot" #[slot]="slotProps">
        <slot v-bind="slotProps" :name="(slot as any)" />
      </template>
    </ATable>
  </NEl>
</template>
