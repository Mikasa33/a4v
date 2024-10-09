<script setup lang="ts">
import { ASearchKeyword } from '@a4v/components'
import { ref } from 'vue'

const keyword = ref<string | number | null>(null)
function handleSearch(value: any) {
  keyword.value = value
}
</script>

<template>
  <ASearchKeyword @search="handleSearch" />
  <pre>关键词：{{ keyword }}</pre>
</template>
