export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
  ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      files: ['*.(html|vue)', '**/*.(html|vue)'],
    },
    {
      customSyntax: 'postcss-scss',
      files: ['*.scss', '**/*.scss'],
    },
  ],
  plugins: [
    'stylelint-order',
    '@stylistic/stylelint-plugin',
    'stylelint-prettier',
    'stylelint-scss',
  ],
}
