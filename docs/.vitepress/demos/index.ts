import type { App, Component } from 'vue'
import { camelCase } from 'lodash-es'
import { Block } from '../components/Block'

const modules = import.meta.glob('../../**/*.vue', { eager: true, import: 'default' })

const components: Record<string, Component> = {}
for (const key in modules) {
  const name = camelCase(key.replace(/.*\/([^/]+)\/demos\/(.*)\.vue/, '$1$2'))
    .replace(/^\w/, match => match.toUpperCase())
  components[name] = Block(modules[key] as Component)
}

function registerComponents(app: App) {
  for (const key in components) {
    app.component(key, components[key]!)
  }
}

export {
  components,
  registerComponents,
}
