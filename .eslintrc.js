/** @typedef {import('eslint').Linter.Config} Config */

module.exports = /** @type {Config} */({
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
})
