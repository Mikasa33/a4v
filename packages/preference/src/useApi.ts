import type { Preference } from './preference'
import type { PreferenceInfo } from './types'
import { defaultPreference } from './constants'
import { preferenceInjectionKey } from './context'

export const usePreferenceStore = createGlobalState((initialValue: PreferenceInfo = defaultPreference) => {
  return ref<PreferenceInfo>(initialValue)
})

export function usePreference(): Preference {
  return inject<Preference>(preferenceInjectionKey)!
}
