const basic = require('@leedomjs/eslint-config-basic')

module.exports = {
  extends: ['@antfu/eslint-config-ts', '@leedomjs/eslint-config-basic'],
  ignorePatterns: ['*.md'],
  rules: {
    '@stylistic/ts/brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
  },
  overrides: [
    ...basic.overrides,
  ],
}
