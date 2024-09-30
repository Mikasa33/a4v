<script setup lang="tsx">
import { useVModel4Path } from '@a4v/hooks'
import { usePreference } from '@a4v/preference'
import { NTab } from 'naive-ui'

const colorModeOptions: any[] = [
  { value: 'light', label: '明亮', icon: 'i-icon-park-outline-sun-one' },
  { value: 'dark', label: '暗黑', icon: 'i-icon-park-outline-moon' },
  { value: 'auto', label: '系统', icon: 'i-icon-park-outline-intermediate-mode' },
]

const { info, update } = usePreference()
const colorMode = useVModel4Path(info, 'colorMode', update)
</script>

<template>
  <NDivider class="!mb-20px !mt-0">
    主题模式
  </NDivider>
  <NTabs v-model:value="colorMode" type="segment">
    <NTab v-for="item in colorModeOptions" :key="item.value" :name="item.value">
      <div :class="item.icon" class="text-16px" />
      <div class="ml-4px text-14px">
        {{ item.label }}
      </div>
    </NTab>
  </NTabs>
</template>
