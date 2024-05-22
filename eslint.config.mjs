import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

/**
 * @typedef {import("eslint").Linter.FlatConfig[]} FlatConfigs
 */

/** @type { FlatConfigs } */
export default [
  {
    ignores: ['lib']
  },

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  eslint.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
]
