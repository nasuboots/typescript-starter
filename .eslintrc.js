/** @typedef {import('eslint').Linter.Config} ESLintConfig */
/** @typedef {import('@typescript-eslint/parser').ParserOptions} ParserOptions */
/** @typedef {ESLintConfig & { parserOptions: ParserOptions }} Config */

module.exports = /** @type {Config} */ ({
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.dev.json'],
  },
  plugins: ['@typescript-eslint', 'import', 'jest', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:node/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'node/no-unsupported-features/es-syntax': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
    {
      files: ['*.test.*'],
      rules: {
        'node/no-unpublished-import': 'off',
      },
    },
  ],
})
