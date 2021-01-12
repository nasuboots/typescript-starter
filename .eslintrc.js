/** @typedef {import('eslint').Linter.Config} ESLintConfig */
/** @typedef {import('@typescript-eslint/parser').ParserOptions} ParserOptions */
/** @typedef {ESLintConfig & { parserOptions: ParserOptions }} Config */

module.exports = /** @type {Config} */({
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.dev.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
})
