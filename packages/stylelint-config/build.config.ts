import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index'],
  externals: [
    '@stylistic/stylelint-plugin',
    'postcss-html',
    'postcss-scss',
    'stylelint',
    'stylelint-config-recess-order',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard',
    'stylelint-order',
    'stylelint-prettier',
    'stylelint-scss',
  ],
  rollup: {
    emitCJS: true,
  },
})
