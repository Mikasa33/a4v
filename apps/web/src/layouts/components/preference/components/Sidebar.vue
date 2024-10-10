<script setup lang="tsx">
import { useVModel4Path } from '@a4v/hooks'
import { usePreference } from '@a4v/preference'

const { info, isDark, update } = usePreference()
const show = useVModel4Path(info, 'sidebar.show', update)
const width = useVModel4Path(info, 'sidebar.width', update)
const collapsedWidth = useVModel4Path(info, 'sidebar.collapsedWidth', update)
const collapsed = useVModel4Path(info, 'sidebar.collapsed', update)
const inverted = useVModel4Path(info, 'sidebar.inverted', update)
</script>

<template>
  <NDivider class="!my-20px">
    侧边栏
  </NDivider>
  <NFormItem label="显示侧边栏">
    <NSwitch v-model:value="show" />
  </NFormItem>
  <NFormItem label="侧边栏宽度">
    <NInputNumber v-model:value="width" size="small" class="w-140px" />
  </NFormItem>
  <NFormItem label="侧边栏折叠宽度">
    <NInputNumber v-model:value="collapsedWidth" size="small" class="w-140px" />
  </NFormItem>
  <NFormItem label="折叠侧边栏">
    <NSwitch v-model:value="collapsed" />
  </NFormItem>
  <NFormItem v-if="!isDark" label="深色侧边栏">
    <NSwitch v-model:value="inverted" />
  </NFormItem>
</template>
