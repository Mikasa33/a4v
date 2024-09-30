<script setup lang="tsx">
import { useVModel4Path } from '@a4v/hooks'
import { usePreference } from '@a4v/preference'

const { info, update } = usePreference()
const lightPrimaryColor = useVModel4Path(info, 'lightThemeColor.primaryColor', update)
const lightInfoColor = useVModel4Path(info, 'lightThemeColor.infoColor', update)
const lightSuccessColor = useVModel4Path(info, 'lightThemeColor.successColor', update)
const lightWarningColor = useVModel4Path(info, 'lightThemeColor.warningColor', update)
const lightErrorColor = useVModel4Path(info, 'lightThemeColor.errorColor', update)
const darkPrimaryColor = useVModel4Path(info, 'darkThemeColor.primaryColor', update)
const darkInfoColor = useVModel4Path(info, 'darkThemeColor.infoColor', update)
const darkSuccessColor = useVModel4Path(info, 'darkThemeColor.successColor', update)
const darkWarningColor = useVModel4Path(info, 'darkThemeColor.warningColor', update)
const darkErrorColor = useVModel4Path(info, 'darkThemeColor.errorColor', update)
</script>

<template>
  <NDivider class="!my-20px">
    主题颜色
  </NDivider>
  <NFormItem label="主色">
    <NColorPicker v-model:value="lightPrimaryColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NFormItem label="信息色">
    <NColorPicker v-model:value="lightInfoColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NFormItem label="成功色">
    <NColorPicker v-model:value="lightSuccessColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NFormItem label="警告色">
    <NColorPicker v-model:value="lightWarningColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NFormItem label="错误色">
    <NColorPicker v-model:value="lightErrorColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NDivider class="!my-20px">
    深色主题颜色
  </NDivider>
  <NFormItem label="主色">
    <NColorPicker v-model:value="darkPrimaryColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NFormItem label="信息色">
    <NColorPicker v-model:value="darkInfoColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NFormItem label="成功色">
    <NColorPicker v-model:value="darkSuccessColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NFormItem label="警告色">
    <NColorPicker v-model:value="darkWarningColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
  <NFormItem label="错误色">
    <NColorPicker v-model:value="darkErrorColor" :show-alpha="false" class="w-140px" />
  </NFormItem>
</template>
