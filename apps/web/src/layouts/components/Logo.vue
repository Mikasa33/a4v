<script setup lang="ts">
import { usePreference } from '@a4v/preference'

const logo = import.meta.env.VITE_APP_LOGO
const title = import.meta.env.VITE_APP_TITLE

const router = useRouter()
const { info } = usePreference()

const width = computed(() => {
  if (info.value.layoutMode === 'horizontal')
    return 'auto'

  if (info.value.sidebar.collapsed)
    return `${info.value.sidebar.collapsedWidth}px`

  return `${info.value.sidebar.width}px`
})

function go() {
  router.push('/')
}
</script>

<template>
  <div
    class="flex-center cursor-pointer px-16px transition-300"
    :style="{ width, height: `${info.header.height}px` }"
    @click="go"
  >
    <img :src="logo" class="h-32px">
    <div
      v-if="info.layoutMode === 'horizontal' || !info.sidebar.collapsed"
      class="ml-8px whitespace-nowrap text-20px font-700"
    >
      {{ title }}
    </div>
  </div>
</template>
