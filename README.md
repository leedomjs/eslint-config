# @leedomjs/eslint-config

> Inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config)

[![npm](https://img.shields.io/npm/v/@leedomjs/eslint-config?color=333&label=)](https://www.npmjs.com/package/@leedomjs/eslint-config)

- Single quotes, no semi
- Auto fix for formatting
- Available for vue 2 & 3
- Only one-line of config

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
````

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

### VS Code support (auto fix)

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `settings.json`:

```jsonc
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },

  // The following is optional.
  // It's better to put under project setting `.vscode/settings.json`
  // to avoid conflicts with working with different eslint configs.
  "eslint.validate": [
   "javascript",
    "javascriptreact",
    "vue",
    "html",
    "json",
  ]
}
```
