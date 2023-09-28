module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
