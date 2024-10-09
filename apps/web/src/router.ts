import type { App } from 'vue'
import { usePreference } from '@a4v/preference'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

const { start, done } = useNProgress(null, {
  showSpinner: false,
})

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach(() => {
  const { info } = usePreference()
  if (info.value.page.loadingBar)
    start()
})

router.afterEach(() => {
  const { info } = usePreference()
  if (info.value.page.loadingBar)
    done()
})

export function setupRouter(app: App) {
  app.use(router)
}
