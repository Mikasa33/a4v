import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index'],
  // externals: [
  //   '@vueuse/core',
  //   'lodash-es',
  //   'vue',
  // ],
  rollup: {
    emitCJS: true,
  },
})
