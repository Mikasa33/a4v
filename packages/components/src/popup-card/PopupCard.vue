<script setup lang="tsx">
import type { CardProps } from 'naive-ui'
import type { Slots } from 'vue'
import type { PopupCardSlots } from './types'
import { useFullscreen } from '@vueuse/core'
import { omit } from 'lodash-es'
import { NButton, NCard, cardProps as nCardProps, NFlex, NScrollbar } from 'naive-ui'
import { ref } from 'vue'
import { pickProps } from '../utils'
import { popupCardProps } from './props'

const props = defineProps(popupCardProps)
const emits = defineEmits<{
  cancel: []
  confirm: []
}>()
const slots = defineSlots<PopupCardSlots>()

const cardProps = pickProps<CardProps>(props, omit(nCardProps, 'closable'))

const cardRef = ref()
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(cardRef)

function handleCancel() {
  emits('cancel')
}
function handleConfirm() {
  emits('confirm')
}

function IconBtn(_: any, { slots }: { slots: Slots }) {
  return (
    <NButton quaternary size="small" class="!h-24px !w-24px !p-0">
      {slots.default?.()}
    </NButton>
  )
}
</script>

<template>
  <NCard
    ref="cardRef"
    v-bind="cardProps"
    :content-class="`overflow-hidden !p-0 ${cardProps?.contentClass ?? ''} ${showFooter && 'mb-20px'}`"
    :class="{ '!rounded-none': isFullscreen }"
    class="h-full"
  >
    <template #header-extra>
      <slot name="header-extra" />
      <NFlex align="center" justify="end" size="small">
        <IconBtn v-if="fullscreenable" @click="toggleFullscreen">
          <div :class="isFullscreen ? 'i-icon-park-outline-off-screen' : 'i-icon-park-outline-full-screen'" class="text-16px" />
        </IconBtn>
        <IconBtn v-if="closable" @click="handleCancel">
          <div class="i-icon-park-outline-close text-16px" />
        </IconBtn>
      </NFlex>
    </template>

    <NScrollbar :content-class="`px-24px ${!showFooter && 'pb-20px'}`">
      <slot />
    </NScrollbar>

    <template v-if="showFooter" #footer>
      <slot v-if="slots.footer" name="footer" />
      <NFlex v-else justify="end">
        <NButton @click="handleCancel">
          取消
        </NButton>
        <NButton type="primary" @click="handleConfirm">
          确认
        </NButton>
      </NFlex>
    </template>
  </NCard>
</template>
