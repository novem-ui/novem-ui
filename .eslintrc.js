module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      files: '**/**/*.spec.{ts,tsx}',
      env: {
        jest: true
      },
      rules: {
        'react/jsx-props-no-spreading': [0]
      }
    },
  ],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'max-len': ['error', { code: 120 }],
    'no-use-before-define': [0],
    'import/no-unresolved': [0],
    'import/no-extraneous-dependencies': [0],
    'import/extensions': [0],
    'no-restricted-syntax': [0],
    '@typescript-eslint/no-use-before-define': 'error',
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': [0],
    'react/prop-types': [0],
    'react/react-in-jsx-scope': [0],
    'no-undef': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'no-unused-vars': [0],
    'no-shadow': [0],
    '@typescript-eslint/no-unused-vars': [2]
  },
}
