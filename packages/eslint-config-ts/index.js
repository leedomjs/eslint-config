const basic = require('@leedomjs/eslint-config-basic')

module.exports = {
  extends: ['@antfu/eslint-config-ts', '@leedomjs/eslint-config-basic'],
  ignorePatterns: ['*.md'],
  overrides: [
    ...basic.overrides,
  ],
}
