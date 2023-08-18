# @leedomjs/eslint-config

> For Vue2 / Vue3

## Usage
### Install
```bash
pnpm add -D eslint @leedomjs/eslint
```

### Config `.eslintrc`
```json
{
  "extends": "@leedomjs"
}
```

Add script for `package.json`
for example:
```json
{
  "script": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
