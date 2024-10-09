import process from 'node:process'
import { VitePluginAppLoading } from '@a4v/vite-plugin-app-loading'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import VueComponent from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin as VitePluginHtml } from 'vite-plugin-html'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueLayouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig(async (config) => {
  const { mode } = config
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    plugins: [
      // 必须在 Vue 之前注册
      // https://uvr.esm.is/introduction.html
      VueRouter({
        dts: 'src/typed-router.d.ts',
        exclude: [
          '**/components/**',
        ],
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      VueLayouts({
        exclude: [
          '**/components/**',
        ],
      }),

      // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
      Vue(),

      // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx
      VueJsx(),

      // https://vue-i18n.intlify.dev/guide/advanced/optimization.html
      VueI18n({
        compositionOnly: true,
        fullInstall: true,
        include: [
          'locales/**',
        ],
        runtimeOnly: true,
      }),

      // https://github.com/unplugin/unplugin-vue-components
      VueComponent({
        dts: 'src/components.d.ts',
        resolvers: [
          NaiveUiResolver(),
        ],
      }),

      // https://github.com/unplugin/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-i18n',
          '@vueuse/core',
          'pinia',
          VueRouterAutoImports,
          {
            'vue-router/auto': ['useLink'],
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
        dirs: [
          'src/composables',
          'src/hooks',
          'src/stores',
          'src/utils',
        ],
        dts: 'src/auto-imports.d.ts',
      }),

      // 必须在 vite-plugin-html 之前注册
      // https://devtools-next.vuejs.org/guide/vite-plugin
      env.VITE_DEVTOOLS === 'true' && VueDevTools(),

      // https://github.com/vbenjs/vite-plugin-html
      VitePluginHtml(),

      env.VITE_APP_LOADING === 'true' && VitePluginAppLoading({
        title: env.VITE_APP_TITLE,
      }),

      // https://unocss.dev/integrations/vite
      Unocss(),
    ],
    server: {
      host: true,
      open: true,
      port: 7777,
    },
  }
})
