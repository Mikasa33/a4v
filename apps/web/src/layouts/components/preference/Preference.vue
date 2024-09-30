<script setup lang="ts">
import { ADrawer } from '@a4v/components'
import { usePreference } from '@a4v/preference'
import TooltipBtn from '../TooltipBtn.vue'
import { ColorMode, Footer, Header, LayoutMode, Page, Sidebar, ThemeColor } from './components'

const message = useMessage()
const { copy } = useClipboard()
const [show, toggle] = useToggle()

const { info, reset } = usePreference()
function handleReset() {
  reset()
  message.success('重置成功')
}
function handleCopy() {
  copy(JSON.stringify(info.value))
  message.success('复制成功')
}
</script>

<template>
  <TooltipBtn @click="toggle">
    <template #trigger>
      <div class="i-icon-park-outline-platte" />
    </template>
    偏好设置
  </TooltipBtn>

  <ADrawer v-model:show="show" title="偏好设置" :fullscreenable="false" :width="360">
    <NForm label-placement="left" :show-feedback="false" class="[&_.n-form-item]:(my-4px) [&_.n-form-item-blank]:(w-full justify-end)">
      <ColorMode />
      <ThemeColor />
      <LayoutMode />
      <Header />
      <Sidebar />
      <Footer />
      <Page />
    </NForm>

    <template #footer>
      <NFlex align="center" justify="space-between">
        <NButton type="error" ghost class="flex-1" @click="handleReset">
          重置配置
        </NButton>
        <NButton type="primary" class="flex-1" @click="handleCopy">
          复制配置
        </NButton>
      </NFlex>
    </template>
  </ADrawer>
</template>
