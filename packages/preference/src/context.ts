import type { Preference } from './preference'
import { createInjectionKey } from '@a4v/utils'

export const preferenceInjectionKey = createInjectionKey<Preference>('a4v-preference')
