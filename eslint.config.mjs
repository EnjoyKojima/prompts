// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-trailing-spaces': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/block-tag-newline': ['error', {
      'singleline': 'always',
      'multiline': 'always',
      'maxEmptyLines': 0
    }],
    'vue/html-indent': ['error', 2],
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false
    }]
  }
})
