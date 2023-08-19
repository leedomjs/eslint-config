# @leedomjs/eslint-config

> Inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## Usage
### Install
```bash
pnpm add -D eslint @leedomjs/eslint-config
```

### Config `.eslintrc`
```json
{
  "extends": "@leedomjs"
}
```

Add script for `package.json`

For example:
```json
{
  "script": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
