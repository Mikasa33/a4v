export default {
  '*': [
    'eslint --fix',
  ],
  '*.{css,html,sass,scss,vue}': [
    'stylelint --fix',
  ],
}
