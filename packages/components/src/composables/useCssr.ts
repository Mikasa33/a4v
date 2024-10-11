import type { CNode } from 'css-render'
import { useSsrAdapter } from '@css-render/vue3-ssr'
import { onBeforeMount } from 'vue'

export function useCssr(style: CNode | undefined) {
  const ssrAdapter = useSsrAdapter()

  const mountStyle = () => {
    style?.mount({
      ssr: ssrAdapter,
    })
  }

  if (ssrAdapter) {
    mountStyle()
  }
  else {
    onBeforeMount(mountStyle)
  }
}
