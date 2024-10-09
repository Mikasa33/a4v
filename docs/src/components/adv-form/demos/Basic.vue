<script setup lang="ts">
import type { AdvFormPopupPresetType, AdvFormProps } from '@a4v/components'
import { AAdvForm } from '@a4v/components'
import { NButton, NFlex } from 'naive-ui'
import { nextTick, ref } from 'vue'

const show = ref(false)
const value = ref({})
const preset = ref<AdvFormPopupPresetType>(undefined)
const formOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
const advFormProps: AdvFormProps = {
  title: '表单标题',
  items: [
    {
      path: 'iAut',
      label: '输入框',
      component: 'NIAut',
      defaultValue: '输入框默认值',
    },
    {
      path: 'textarea',
      label: '多行文本框',
      component: 'NIAut',
      componentProps: {
        type: 'textarea',
      },
    },
    {
      path: 'select',
      label: '下拉框',
      component: 'NSelect',
      componentProps: {
        options: formOptions,
      },
    },
  ],
  labelPlacement: 'left',
  labelWidth: 100,
  rules: {
    iAut: { required: true, message: '请输入输入框值', trigger: ['blur', 'iAut'] },
    textarea: { required: true, message: '请输入多行文本框值', trigger: ['blur', 'iAut'] },
    select: { required: true, message: '请选择下拉框值', trigger: ['blur', 'change'] },
  },
}

async function handleOpen(type: AdvFormPopupPresetType) {
  preset.value = type
  await nextTick()
  show.value = true
}

function handleConfirm(_: Record<string, any>) {
  show.value = false
}
</script>

<template>
  <AAdvForm
    v-bind="advFormProps"
    v-model:show="show"
    v-model:value="value"
    :preset
    @confirm="handleConfirm"
  />
  <NFlex>
    <NButton @click="handleOpen('drawer')">
      打开抽屉表单
    </NButton>
    <NButton @click="handleOpen('modal')">
      打开模态窗表单
    </NButton>
  </NFlex>
</template>
