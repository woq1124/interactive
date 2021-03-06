module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.*', '**/*.stories.*'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-unused-vars': 1,
    'no-shadow': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'max-len': [1, { code: 120 }],
    'react/no-array-index-key': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
