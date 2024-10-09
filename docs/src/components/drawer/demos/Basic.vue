<script setup lang="ts">
import type { DrawerProps } from '@a4v/components'
import { ADrawer } from '@a4v/components'
import { NButton } from 'naive-ui'
import { ref } from 'vue'

const show = ref(false)
const drawerProps: DrawerProps = {
  title: '标题信息',
}
</script>

<template>
  <NButton @click="show = true">
    打开抽屉
  </NButton>
  <ADrawer
    v-bind="drawerProps"
    v-model:show="show"
  >
    123
  </ADrawer>
</template>
