<script setup lang="tsx">
import type { ConfigProviderProps } from 'naive-ui'
import type { ConfigProviderSlots } from './types'
import {
  dateZhCN,
  NConfigProvider,
  configProviderProps as nConfigProviderProps,
  NDialogProvider,
  NGlobalStyle,
  NLoadingBarProvider,
  NMessageProvider,
  NModalProvider,
  NNotificationProvider,
  useDialog,
  useLoadingBar,
  useMessage,
  useModal,
  useNotification,
  zhCN,
} from 'naive-ui'
import { computed, defineComponent, h } from 'vue'
import { pickProps } from '../utils'
import { configProviderProps } from './props'

const props = defineProps(configProviderProps)
defineSlots<ConfigProviderSlots>()

const pickedConfigProviderProps = pickProps<ConfigProviderProps>(props, nConfigProviderProps)

const dateLocale = computed(() => props.dateLocale ?? dateZhCN)
const locale = computed(() => props.locale ?? zhCN)

// 挂载 naive 组件的方法至 window，以便在路由钩子函数和请求函数里面调用
function registerNaiveTools() {
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$modal = useModal()
  window.$notification = useNotification()
}

const ProviderContent = defineComponent({
  setup() {
    registerNaiveTools()
  },
  render() {
    return h('div')
  },
})
</script>

<template>
  <NConfigProvider v-bind="pickedConfigProviderProps" :date-locale :locale>
    <NDialogProvider>
      <NLoadingBarProvider>
        <NMessageProvider>
          <NModalProvider>
            <NNotificationProvider>
              <NGlobalStyle v-if="globalStyle" />
              <ProviderContent />
              <slot />
            </NNotificationProvider>
          </NModalProvider>
        </NMessageProvider>
      </NLoadingBarProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>
