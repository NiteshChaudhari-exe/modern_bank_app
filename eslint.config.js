import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const base = js.configs.recommended
const hooks = reactHooks.configs['recommended-latest']
const refresh = reactRefresh.configs.vite

export default [
  // base recommended rules
  base,
  // react hooks recommendations
  hooks,
  // react-refresh (Vite) rules
  refresh,
  // project-specific overrides
  {
    ignores: ['dist', 'node_modules', '*.min.js'],
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]
