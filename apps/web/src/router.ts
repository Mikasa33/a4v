import type { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export function setupRouter(app: App) {
  app.use(router)
}
