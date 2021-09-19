module.exports = {
  env: {
    es2021: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: ['next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    eqeqeq: 'error',
    'no-throw-literal': 'error',
    semi: 'error',
    indent: ['error', 2],
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};
