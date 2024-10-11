<script setup lang="ts">
import type { GlobalTheme } from 'naive-ui'
import { AConfigProvider } from '@a4v/components'
import { darkTheme, NButton, NCard, NFlex } from 'naive-ui'
import { ref } from 'vue'

const theme = ref<GlobalTheme | null>(null)
</script>

<template>
  <!-- 设置 global-style 是为了解决在文档中的报错问题，平时可以正常使用 -->
  <!-- abstract inline-theme-disabled 是为了解决在文档中的相关问题  -->
  <AConfigProvider :global-style="false" abstract inline-theme-disabled>
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
