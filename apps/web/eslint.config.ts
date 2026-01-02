import { tanstackConfig } from '@tanstack/eslint-config'
import reactHooks from 'eslint-plugin-react-hooks'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/', '.next/', 'node_modules/', 'out/'],
  },

  ...tanstackConfig,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      prettier: prettierPlugin, // Add the Prettier plugin
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // 1. Enforce Prettier formatting as ESLint rules
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // Enforce single quotes
          printWidth: 80, // Max characters per line
          tabWidth: 2, // 2-space indentation
          trailingComma: 'es5',
          semi: false,
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // 2. This must be LAST to disable any conflicting ESLint rules
  eslintConfigPrettier,
]
