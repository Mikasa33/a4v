<script setup lang="ts">
import type { FormProps } from '@a4v/components'
import { AForm } from '@a4v/components'
import { NButton, NFlex } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref()
const formValue = ref({})
const formOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
const formProps: FormProps = {
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
      defaultValue: '输入框默认值',
    },
    {
      path: 'textarea',
      label: '多行文本框',
      component: 'NInput',
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
    input: { required: true, message: '请输入输入框值', trigger: ['blur', 'input'] },
    textarea: { required: true, message: '请输入多行文本框值', trigger: ['blur', 'input'] },
    select: { required: true, message: '请选择下拉框值', trigger: ['blur', 'change'] },
  },
}
</script>

<template>
  <AForm ref="formRef" v-bind="formProps" v-model:value="formValue" />
  <NFlex justify="end">
    <NButton @click="formRef.restoreValidation()">
      清空验证
    </NButton>
    <NButton type="primary" @click="formRef.validate()">
      验证
    </NButton>
  </NFlex>
  <pre>{{ formValue }}</pre>
</template>
