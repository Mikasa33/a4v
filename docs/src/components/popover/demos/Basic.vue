<script setup lang="ts">
import type { PopoverProps } from '@a4v/components'
import { APopover } from '@a4v/components'
import { NButton } from 'naive-ui'

const popoverProps: PopoverProps = {
  title: '标题信息',
  width: 500,
}
</script>

<template>
  <APopover v-bind="popoverProps">
    <template #trigger>
      <NButton>
        悬浮
      </NButton>
    </template>
    内容
  </APopover>
</template>
