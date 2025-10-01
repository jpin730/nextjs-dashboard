import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-plugin-prettier/recommended'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  prettier,
]

export default eslintConfig

// To install the required packages, run:
// pnpm add eslint eslint-config-next @eslint/eslintrc
// For extentions support, run:
// pnpm add -D @next/eslint-plugin-next eslint-plugin-react-hooks
