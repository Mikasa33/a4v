<script setup lang="tsx">
import type { CardProps } from 'naive-ui'
import type { Slots } from 'vue'
import type { PopupCardSlots } from './types'
import { Icon } from '@iconify/vue'
import { useFullscreen } from '@vueuse/core'
import { omit } from 'lodash-es'
import { NButton, NCard, cardProps as nCardProps, NFlex, NScrollbar } from 'naive-ui'
import { ref } from 'vue'
import { useCssr } from '../composables'
import { pickProps } from '../utils'
import { cssr } from './cssr'
import { popupCardProps } from './props'

const props = defineProps(popupCardProps)
const emits = defineEmits<{
  cancel: []
  confirm: []
}>()
const slots = defineSlots<PopupCardSlots>()

useCssr(cssr)

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
    <NButton quaternary size="small" class="a-popup-card-header__button">
      {slots.default?.()}
    </NButton>
  )
}
</script>

<template>
  <NCard
    ref="cardRef"
    v-bind="cardProps"
    :content-class="`a-popup-card__content ${cardProps?.contentClass ?? ''} ${showFooter && 'a-popup-card__content--footer'}`"
    :class="{ 'a-popup-card--fullscreen': isFullscreen }"
    class="a-popup-card"
  >
    <template #header-extra>
      <slot name="header-extra" />
      <NFlex align="center" justify="end" size="small" class="a-popup-card-header">
        <IconBtn v-if="fullscreenable" @click="toggleFullscreen">
          <div class="a-popup-card-header__icon" />
          <Icon :icon="isFullscreen ? 'icon-park-outline:off-screen' : 'icon-park-outline:full-screen'" class="a-popup-card-header__icon" />
        </IconBtn>
        <IconBtn v-if="closable" @click="handleCancel">
          <Icon icon="icon-park-outline:close" class="a-popup-card-header__icon" />
        </IconBtn>
      </NFlex>
    </template>

    <NScrollbar :content-class="`a-popup-card__scrollbar ${!showFooter && 'a-popup-card__scrollbar--footer'}`">
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
