<script setup lang="tsx">
import { useVModel4Path } from '@a4v/hooks'
import { usePreference } from '@a4v/preference'

const { info, isDark, update } = usePreference()
const show = useVModel4Path(info, 'header.show', update)
const height = useVModel4Path(info, 'header.height', update)
const inverted = useVModel4Path(info, 'header.inverted', update)
</script>

<template>
  <NDivider class="!my-20px">
    顶栏
  </NDivider>
  <NFormItem label="显示顶栏">
    <NSwitch v-model:value="show" />
  </NFormItem>
  <NFormItem label="顶栏高度">
    <NInputNumber v-model:value="height" size="small" class="w-140px" />
  </NFormItem>
  <NFormItem v-if="!isDark" label="深色顶栏">
    <NSwitch v-model:value="inverted" />
  </NFormItem>
</template>
