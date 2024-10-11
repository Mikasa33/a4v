<script setup lang="ts">
import { AConfigProvider } from '@a4v/components'
import { NButton, NFlex } from 'naive-ui'

function handleShowDialog() {
  $dialog.warning({ title: '提示', content: '点击了按钮' })
}
function handleShowLoadingBar() {
  $loadingBar.start()
  setTimeout(() => {
    $loadingBar.finish()
  }, 2000)
}
function handleShowMessage() {
  window.$message.success('点击了按钮')
}
function handleShowModal() {
  window.$modal.create({
    preset: 'card',
    title: '标题',
    content: '1.5 秒后自动关闭',
    style: { width: '500px' },
  })
  setTimeout(() => {
    $modal.destroyAll()
  }, 1500)
}
function handleShowNotification() {
  $notification.error({
    title: '错误',
    content: '点击了按钮',
    duration: 1500,
  })
}
</script>

<template>
  <!-- 设置 global-style 是为了解决在文档中的报错问题，平时可以正常使用 -->
  <!-- abstract inline-theme-disabled 是为了解决在文档中的相关问题  -->
  <AConfigProvider :global-style="false" abstract inline-theme-disabled>
    <NFlex>
      <NButton @click="handleShowDialog">
        $dialog
      </NButton>
      <NButton @click="handleShowLoadingBar">
        $loadingBar
      </NButton>
      <NButton @click="handleShowMessage">
        $message
      </NButton>
      <NButton @click="handleShowModal">
        $modal
      </NButton>
      <NButton @click="handleShowNotification">
        $notification
      </NButton>
    </NFlex>
  </AConfigProvider>
</template>
