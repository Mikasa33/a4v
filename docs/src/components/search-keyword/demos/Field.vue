<script setup lang="ts">
import type { SearchKeywordProps } from '@a4v/components'
import { ASearchKeyword } from '@a4v/components'
import { ref } from 'vue'

const params = ref({
  value: null,
  field: null,
})
const searchProps: SearchKeywordProps = {
  fieldOptions: [
    { value: 'name', label: '姓名1231123' },
    { value: 'age', label: '年龄' },
    { value: 'gender', label: '性别' },
  ],
}
</script>

<template>
  <ASearchKeyword v-bind="searchProps" v-model:value="params.value" v-model:field="params.field" />
  <pre>{{ params }}</pre>
</template>
