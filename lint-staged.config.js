export default {
  '*': [
    'eslint --fix',
  ],
  '*.{css,html,sass,scss,vue}': [
    'stylelint \"**/*.{css,html,sass,scss,vue}\" \"**/.vitepress/**/*.{css,html,sass,scss,vue}\" --fix',
  ],
}
