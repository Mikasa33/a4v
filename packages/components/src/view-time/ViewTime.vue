<script setup lang="ts">
import type { ViewTimeSlots } from './types'
import dayjs from 'dayjs'
import { computed } from 'vue'
import { viewTimeProps } from './props'

const props = defineProps(viewTimeProps)
defineSlots<ViewTimeSlots>()

const view = computed(() => {
  if (!props.value) {
    return null
  }
  return dayjs(props.value).format(props.format)
})
</script>

<template>
  <div>{{ view }}</div>
</template>
