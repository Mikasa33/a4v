<script setup lang="ts">
import type { CardProps, DrawerProps } from 'naive-ui'
import type { DrawerSlots } from './types'
import { NDrawer, drawerProps as nDrawerProps } from 'naive-ui'
import { APopupCard, popupCardProps } from '../popup-card'
import { pickProps } from '../utils'
import { drawerProps } from './props'

const props = defineProps(drawerProps)
const emits = defineEmits<{
  confirm: []
}>()
const slots = defineSlots<DrawerSlots>()

const show = defineModel<boolean>('show')

const pickedDrawerProps = pickProps<DrawerProps>(props, nDrawerProps)
const pickedCardProps = pickProps<CardProps>(props, popupCardProps)

function handleCancel() {
  show.value = false
}
function handleConfirm() {
  emits('confirm')
}
</script>

<template>
  <NDrawer v-bind="pickedDrawerProps" v-model:show="show">
    <APopupCard v-bind="pickedCardProps" @cancel="handleCancel" @confirm="handleConfirm">
      <template v-if="slots['header-extra']" #header-extra>
        <slot name="header-extra" />
      </template>
      <slot />
      <template v-if="slots.footer" #footer>
        <slot name="footer" />
      </template>
    </APopupCard>
  </NDrawer>
</template>
