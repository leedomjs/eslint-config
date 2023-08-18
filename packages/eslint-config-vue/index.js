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
