<script setup lang="ts">
import type { ModalProps } from '@a4v/components'
import { AModal } from '@a4v/components'
import { NButton } from 'naive-ui'
import { ref } from 'vue'

const show = ref(false)
const modalProps: ModalProps = {
  title: '标题信息',
}
</script>

<template>
  <NButton @click="show = true">
    打开模态窗
  </NButton>
  <AModal v-bind="modalProps" v-model:show="show">
    123
  </AModal>
</template>
