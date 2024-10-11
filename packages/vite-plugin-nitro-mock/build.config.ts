import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index'],
  externals: [
    'chalk',
    'consola',
    'get-port-please',
    'nitropack',
    'vite',
  ],
  rollup: {
    emitCJS: true,
  },
})
