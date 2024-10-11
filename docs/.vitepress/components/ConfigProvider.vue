<script setup lang="ts">
import { darkTheme, dateZhCN, NConfigProvider, NDialogProvider, NLoadingBarProvider, NMessageProvider, NModalProvider, NNotificationProvider, zhCN } from 'naive-ui'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const theme = computed(() => isDark.value ? darkTheme : null)
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme abstract inline-theme-disabled>
    <NDialogProvider>
      <NLoadingBarProvider>
        <NMessageProvider>
          <NModalProvider>
            <NNotificationProvider>
              <slot />
            </NNotificationProvider>
          </NModalProvider>
        </NMessageProvider>
      </NLoadingBarProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>
