import type { PluginOption } from 'vite'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

/**
 * 用于获取 loading 的 html 模板
 */
async function getLoadingRawByHtmlTemplate(loadingTemplate: string, title: string) {
  // 支持在 app 内自定义 loading 模板，模版参考 default-loading.html 即可
  let appLoadingPath = path.join(process.cwd(), loadingTemplate)

  if (!fs.existsSync(appLoadingPath)) {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    appLoadingPath = path.join(__dirname, './template.html')
  }

  const appLoadingFile = await fsp.readFile(appLoadingPath, 'utf8')
  return appLoadingFile.replace(/%TITLE%/, title)
}

/**
 * 用于生成将 loading 样式注入到项目中，为多 app 提供 loading 样式，无需在每个 app -> index.html 单独引入
 */
export async function VitePluginAppLoading(options: { loadingTemplate?: string, storageKey?: string, title?: string } = {}): Promise<PluginOption | undefined> {
  const { loadingTemplate = 'loading.html', storageKey = 'a4v-preference-scheme', title = 'Loading...' } = options
  const loadingHtml = await getLoadingRawByHtmlTemplate(loadingTemplate, title)

  // 获取缓存的主题
  // 保证黑暗主题下，刷新页面时，loading也是黑暗主题
  const injectScript = `
  <script vite-plugin-loading="js">
  function kebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  var preferenceScheme = localStorage.getItem('${storageKey}');
  if (preferenceScheme) {
    var preferenceJSON = JSON.parse(preferenceScheme)
    var isDark = preferenceJSON.colorMode === 'dark'
    document.documentElement.classList.toggle('dark', isDark);
    var themeColor = preferenceJSON[isDark ? 'darkThemeColor' : 'lightThemeColor']
    Object.entries(themeColor).forEach(([key, value]) => {
      document.documentElement.style.setProperty('--' + kebabCase(key), value)
    })
  }
</script>
`

  if (!loadingHtml) {
    return
  }

  return {
    enforce: 'pre',
    name: 'vite:loading',
    transformIndexHtml: {
      handler(html) {
        const re = /<body\s*>/
        html = html.replace(re, `<body>${injectScript}${loadingHtml}`)
        return html
      },
      order: 'pre',
    },
  }
}
