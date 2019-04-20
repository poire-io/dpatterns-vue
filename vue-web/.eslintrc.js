module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript'
  ],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
    'func-call-spacing': ['warn', 'never'],
    "indent": [2, "tab"],
    "no-tabs": 0,
    'key-spacing': ['warn'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-irregular-whitespace': ['warn', { 'skipStrings': true }],
    'no-trailing-spaces': ['warn'],
    'semi': ['warn', 'always'],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': ['warn', 'always'],
    'max-len': 0,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
