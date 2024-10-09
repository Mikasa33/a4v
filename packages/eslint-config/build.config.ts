import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index'],
  externals: [
    '@antfu/eslint-config',
    'eslint',
    'eslint-flat-config-utils',
    'eslint-plugin-format',
  ],
  rollup: {
    emitCJS: true,
  },
})
