import { removeAppLoading } from '@a4v/utils'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { setupPreference } from './preference'
import { setupRouter } from './router'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'

async function initApplication() {
  const app = createApp(App)
  setupPreference(app)
  setupRouter(app)
  app.use(createI18n({
    locale: 'zh-CN',
    messages,
  }))
  app.mount('#app')

  // 移除并销毁 app loading
  removeAppLoading()
}

initApplication()
