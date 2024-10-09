import type { DeepPartial } from '@a4v/types'
import type { PreferenceInfo, ThemeColorPreferenceInfo } from './types'
import { useColorMode, useDark, useStorage } from '@vueuse/core'
import { cloneDeep, kebabCase, merge } from 'lodash-es'
import { type App, computed, type ComputedRef, type MaybeRefOrGetter, nextTick, ref, type Ref, type WritableComputedRef } from 'vue'
import { defaultPreference } from './constants'
import { preferenceInjectionKey } from './context'
import { usePreferenceStore } from './useApi'

export interface PreferenceOption {
  /**
   * 初始偏好
   *
   * @default {}
   */
  initialValue?: MaybeRefOrGetter<DeepPartial<PreferenceInfo>>
  /**
   * 存储 key
   *
   * @default 'a4v-preference-scheme'
   */
  storageKey?: string | null
}

export interface Preference {
  /**
   * 偏好信息
   */
  info: Ref<PreferenceInfo>
  /**
   * 是否暗色模式
   */
  isDark: WritableComputedRef<boolean>
  /**
   * 主题颜色
   */
  themeColor: ComputedRef<ThemeColorPreferenceInfo>
  /**
   * 重置偏好
   */
  reset: () => void
  /**
   * 更新偏好
   */
  update: (value: DeepPartial<PreferenceInfo>) => void
  /**
   * 安装
   *
   * @param app 应用
   */
  install: (app: App) => void
}

export function createPreference(options: PreferenceOption = {}) {
  const { initialValue = {}, storageKey = 'a4v-preference-scheme' } = options

  const isDark = useDark()
  const colorMode = useColorMode({ emitAuto: true })
  const store = usePreferenceStore(merge(defaultPreference, initialValue))

  const storage = storageKey === null
    ? ref(cloneDeep(store.value))
    : useStorage<PreferenceInfo>(storageKey, cloneDeep(store.value), undefined, {
      serializer: {
        read: (v: any) => v ? JSON.parse(v) : null,
        write: (v: any) => JSON.stringify(v),
      },
    })

  const themeColor = computed<ThemeColorPreferenceInfo>(() => isDark.value ? storage.value.darkThemeColor : storage.value.lightThemeColor)

  function setCSSVariables() {
    const root = document.documentElement
    if (!root) {
      return
    }

    Object.entries(themeColor.value).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${kebabCase(key)}`, value)
    })
  }

  function setColorMode() {
    colorMode.value = storage.value.colorMode
  }

  function reset() {
    update(cloneDeep(store.value))
  }
  function update(value: DeepPartial<PreferenceInfo>) {
    storage.value = merge(storage.value, value)
    if (value.colorMode) {
      setColorMode()
    }
    nextTick(() => {
      setCSSVariables()
    })
  }

  const preference: Preference = {
    info: storage,
    isDark,
    themeColor,
    reset,
    update,
    install(app: App) {
      app.provide(preferenceInjectionKey, preference)
    },
  }

  setColorMode()
  nextTick(() => {
    setCSSVariables()
  })

  return preference
}
