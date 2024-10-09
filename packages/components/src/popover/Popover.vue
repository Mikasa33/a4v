<script setup lang="ts">
import type { CardProps, PopoverProps } from 'naive-ui'
import type { PopoverSlots } from './types'
import { omit } from 'lodash-es'
import { cardProps as nCardProps, NPopover, popoverProps as nPopoverProps } from 'naive-ui'
import { APopupCard } from '../popup-card'
import { pickProps } from '../utils'
import { popoverProps } from './props'

defineOptions({
  name: 'NpPopover',
})

const props = defineProps(popoverProps)
const emits = defineEmits<{
  confirm: []
}>()
const slots = defineSlots<PopoverSlots>()

const show = defineModel<boolean>('show')

const pickedPopoverProps = pickProps<PopoverProps>(props, nPopoverProps)
const pickedCardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))

function handleCancel() {
  show.value = false
}
function handleConfirm() {
  emits('confirm')
}
</script>

<template>
  <NPopover v-bind="pickedPopoverProps" v-model:show="show" class="!p-0">
    <APopupCard v-bind="pickedCardProps" :fullscreenable="false" @cancel="handleCancel" @confirm="handleConfirm">
      <template v-if="slots['header-extra']" #header-extra>
        <slot name="header-extra" />
      </template>
      <slot />
      <template v-if="slots.footer" #footer>
        <slot name="footer" />
      </template>
    </APopupCard>
    <template #trigger>
      <slot name="trigger" />
    </template>
  </NPopover>
</template>
