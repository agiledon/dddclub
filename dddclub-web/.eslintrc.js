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
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow unused variables during development
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // disallow trailing commas
    'comma-dangle': ['error', 'never'],
    // disallow trailing semi
    semi: ['error', 'never'],
    // allow the unary operators ++ and --
    'no-plusplus': 'off',
    'object-curly-newline': 'off',
    // enforce a maximum line length
    'max-len': [0, 150]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
