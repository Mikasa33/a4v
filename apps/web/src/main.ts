import { removeAppLoading } from '@a4v/vite-plugin-app-loading/utils'
import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './i18n'
import { setupPreference } from './preference'
import { setupRouter } from './router'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'

async function initApplication() {
  const app = createApp(App)
  setupI18n(app)
  setupPreference(app)
  setupRouter(app)
  app.mount('#app')

  // 移除并销毁 app loading
  removeAppLoading()
}

initApplication()
