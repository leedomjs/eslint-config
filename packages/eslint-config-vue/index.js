const { getPackageInfoSync, isPackageExists } = require('local-pkg')

// Vue 2 or Vue 3
const vue = getPackageInfoSync('vue')
const isVue2 = vue && vue.version && vue.version.startsWith('2.')

// TS
const TS = isPackageExists('typescript')
if (!TS) {
  console.warn('[@leedomjs/eslint-config] TypeScript is not installed, support JS only.')
}

const vue3Rules = {
  'vue/multi-word-component-names': 0,
}

module.exports = {
  extends: [
    isVue2 ? 'plugin:vue/recommended' : 'plugin:vue/vue3-recommended',
    TS ? '@leedomjs/eslint-config-ts' : '@leedomjs/eslint-config-basic',
  ],
  rules: {
    ...(isVue2 ? {} : vue3Rules),
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
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: TS ? '@typescript-eslint/parser' : null,
      },
      rules: {
        'no-unused-vars': 0,
        'no-undef': 0,
        ...(TS
          ? { '@typescript-eslint/no-unused-vars': 0 }
          : null),
      },
    },
  ],
}
