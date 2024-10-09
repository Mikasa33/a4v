<script setup lang="ts">
import type { GlobalTheme } from 'naive-ui'
import { AConfigProvider } from '@a4v/components'
import { darkTheme, NButton, NCard, NFlex } from 'naive-ui'
import { ref } from 'vue'

const theme = ref<GlobalTheme | null>(null)
</script>

<template>
  <AConfigProvider :global-style="false" :theme>
    <NCard>
      <NFlex>
        <NButton @click="theme = darkTheme">
          深色
        </NButton>
        <NButton @click="theme = null">
          浅色
        </NButton>
      </NFlex>
    </NCard>
  </AConfigProvider>
</template>
