<script setup lang="tsx">
import { useVModel4Path } from '@a4v/hooks'
import { usePreference } from '@a4v/preference'

const { info, isDark, update } = usePreference()
const show = useVModel4Path(info, 'footer.show', update)
const height = useVModel4Path(info, 'footer.height', update)
const inverted = useVModel4Path(info, 'footer.inverted', update)
</script>

<template>
  <NDivider class="!my-20px">
    底栏
  </NDivider>
  <NFormItem label="显示底栏">
    <NSwitch v-model:value="show" />
  </NFormItem>
  <NFormItem label="底栏高度">
    <NInputNumber v-model:value="height" size="small" class="w-140px" />
  </NFormItem>
  <NFormItem v-if="!isDark" label="深色底栏">
    <NSwitch v-model:value="inverted" />
  </NFormItem>
</template>
