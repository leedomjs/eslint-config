const { getPackageInfoSync } = require('local-pkg')

const vue = getPackageInfoSync('vue')
const isVue2 = vue && vue.version && vue.version.startsWith('2.')

module.exports = {
  extends: [
    isVue2 ? 'plugin:vue/recommended' : 'plugin:vue/vue3-recommended',
    '@leedomjs/eslint-config-basic',
  ],
  rules: {
    'vue/first-attribute-linebreak': [
      2,
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/singleline-l-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-v-html': 0,
    'vue/require-default-prop': 0,
    'vue/eqeqeq': [2, 'smart'],
    'vue/block-order': [
      2,
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/no-potential-component-option-typo': 2,
    'vue/no-multiple-objects-in-class': 2,
    'vue/require-prop-types': 0,
    'vue/html-comment-content-newline': [
      2,
      {
        multiline: 'never',
      },
    ],
    'vue/html-comment-content-spacing': [2, 'always'],
    'vue/no-empty-component-block': 2,
    'vue/no-unused-properties': [
      2,
      {
        groups: ['props', 'data'],
      },
    ],
    'vue/no-unused-refs': 2,
    'vue/no-useless-mustaches': 2,
    'vue/no-useless-v-bind': 2,
    'vue/padding-line-between-blocks': 2,
    'vue/prefer-separate-static-class': 2,
    'vue/space-infix-ops': 2,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: 1,
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-unused-vars': 0,
        'no-undef': 0,
      },
    },
  ],
}
