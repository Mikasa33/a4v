import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index'],
  externals: ['cz-git'],
  rollup: {
    emitCJS: true,
  },
})
