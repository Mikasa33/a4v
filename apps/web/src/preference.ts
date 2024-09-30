import type { App } from 'vue'
import { createPreference } from '@a4v/preference'

export const preference = createPreference()

export function setupPreference(app: App) {
  app.use(preference)
}
