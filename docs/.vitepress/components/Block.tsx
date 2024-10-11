import { NCard } from 'naive-ui'
import { defineComponent } from 'vue'
import ConfigProvider from './ConfigProvider.vue'

export function Block(Component: any) {
  return defineComponent({
    render() {
      return (
        <ConfigProvider>
          <NCard themeOverrides={{ borderRadius: '8px' }}>
            <Component />
          </NCard>
        </ConfigProvider>
      )
    },
  })
}
