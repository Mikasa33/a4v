import type { App } from 'vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

export function setupI18n(app: App) {
  app.use(createI18n({
    globalInjection: true,
    legacy: false, // you must set `false`, to use Composition API
    locale: 'zh-CN',
    messages,
  }))
}
