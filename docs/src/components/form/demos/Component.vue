<script setup lang="tsx">
import type { FormProps } from '@a4v/components'
import { AForm } from '@a4v/components'
import { NDatePicker, NTimePicker } from 'naive-ui'
import { defineComponent, markRaw, ref } from 'vue'

const formValue = ref({})
const formProps: FormProps = {
  items: [
    {
      path: 'input',
      label: '输入框',
      component: 'NInput',
    },
    {
      path: 'custom1',
      label: '自定义组件',
      component: markRaw(defineComponent({
        setup(props: any) {
        // 此处不太方便使用 template 写法，所以使用 jsx 演示
          return () => <NDatePicker {...props} />
        },
      })),
      componentProps: {
        type: 'datetime',
      },
    },
    {
      path: 'custom2',
      label: '渲然函数组件',
      component: (props: any) => <NTimePicker {...props} />,
      componentProps: {
        isHourDisabled: (hour: number) => hour % 2 === 0,
      },
    },
  ],
  labelWidth: 100,
}
</script>

<template>
  <AForm v-bind="formProps" v-model:value="formValue" />
  <pre>{{ formValue }}</pre>
</template>
