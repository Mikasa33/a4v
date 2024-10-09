import type { App, Component } from 'vue'

// https://github.com/vant-ui/vant/issues/8302
interface EventShim {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void
    }
  }
}

export type WithInstall<T> = T & {
  install: (app: App) => void
} & EventShim

export function withInstall<T extends Component>(options: T): WithInstall<T> {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options
    if (name) {
      app.component(name, options)
    }
  }

  return options as WithInstall<T>
}
