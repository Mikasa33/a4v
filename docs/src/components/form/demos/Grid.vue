<script setup lang="ts">
import type { FormProps } from '@a4v/components'
import { AForm } from '@a4v/components'
import { ref } from 'vue'

const formValue = ref({})
const formOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v,
  }),
)
const formProps: FormProps = {
  giSpan: 12,
  xGap: 16,
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
    },
    {
      path: 'select',
      label: '下拉框',
      component: 'NSelect',
      componentProps: {
        options: formOptions,
      },
    },
    {
      path: 'textarea',
      label: '多行文本框',
      component: 'NInput',
      componentProps: {
        type: 'textarea',
      },
      span: 24,
    },
  ],
  labelWidth: 100,
}
</script>

<template>
  <AForm
    v-bind="formProps"
    v-model:value="formValue"
  />
</template>
