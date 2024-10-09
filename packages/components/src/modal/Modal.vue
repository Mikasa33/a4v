<script setup lang="ts">
import type { CardProps, ModalProps } from 'naive-ui'
import type { ModalSlots } from './types'
import { addUnit } from '@a4v/utils'
import { omit } from 'lodash-es'
import { cardProps as nCardProps, NModal, modalProps as nModalProps } from 'naive-ui'
import { APopupCard } from '../popup-card'
import { pickProps } from '../utils'
import { modalProps } from './props'

const props = defineProps(modalProps)
const emits = defineEmits<{
  confirm: []
}>()
const slots = defineSlots<ModalSlots>()

const show = defineModel<boolean>('show')

const pickedModalProps = pickProps<ModalProps>(props, nModalProps)
const pickedCardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))

function handleCancel() {
  show.value = false
}
function handleConfirm() {
  emits('confirm')
}
</script>

<template>
  <NModal v-bind="pickedModalProps" v-model:show="show" :style="{ width: addUnit(props.width) }">
    <APopupCard v-bind="pickedCardProps" @cancel="handleCancel" @confirm="handleConfirm">
      <template v-if="slots['header-extra']" #header-extra>
        <slot name="header-extra" />
      </template>
      <slot />
      <template v-if="slots.footer" #footer>
        <slot name="footer" />
      </template>
    </APopupCard>
  </NModal>
</template>
