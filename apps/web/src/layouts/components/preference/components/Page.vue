<script setup lang="tsx">
import { useVModel4Path } from '@a4v/hooks'
import { pageAnimateModeOptions, usePreference } from '@a4v/preference'

const { info, update } = usePreference()
const animate = useVModel4Path(info, 'page.animate', update)
const animateMode = useVModel4Path(info, 'page.animateMode', update)
const loadingBar = useVModel4Path(info, 'page.loadingBar', update)
</script>

<template>
  <NDivider class="!my-20px">
    页面
  </NDivider>
  <NFormItem label="切换动画">
    <NSwitch v-model:value="animate" />
  </NFormItem>
  <NFormItem label="切换动画类型">
    <NSelect v-model:value="animateMode" :options="pageAnimateModeOptions" size="small" class="w-140px" />
  </NFormItem>
  <NFormItem label="加载进度条">
    <NSwitch v-model:value="loadingBar" />
  </NFormItem>
</template>
