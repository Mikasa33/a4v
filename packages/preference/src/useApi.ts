import type { Preference } from './preference'
import type { PreferenceInfo } from './types'
import { createGlobalState } from '@vueuse/core'
import { inject, ref } from 'vue'
import { defaultPreference } from './constants'
import { preferenceInjectionKey } from './context'

export const usePreferenceStore = createGlobalState((initialValue: PreferenceInfo = defaultPreference) => {
  return ref<PreferenceInfo>(initialValue)
})

export function usePreference(): Preference {
  return inject<Preference>(preferenceInjectionKey)!
}
