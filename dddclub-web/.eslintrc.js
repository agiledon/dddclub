module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'no-plusplus': 'off',
    'object-curly-newline': 'off',
    'max-len': [0, 150],
    'import/extensions': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
