import type { ComponentResolver } from 'unplugin-vue-components/types'

function NpResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(N[A-Z]|n-[a-z])/))
        return { name, from: 'naive-ui' }
      else if (name.match(/^(A[A-Z]|a-[a-z])/))
        return { name, from: '@a4v/components' }
    },
  }
}

export default NpResolver
