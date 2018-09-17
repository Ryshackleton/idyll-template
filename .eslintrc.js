module.exports = {
  root: true,
  parser: 'babel-eslint', // not necessary because of webpack parser?
  extends: 'airbnb',
  plugins: [
    "react",
    "jsx-a11y",
    "import"
  ],
  rules: {
    'camelcase': 'off',
    // 'no-debugger': 0,
    'arrow-body-style': [2, 'always'],
    'no-underscore-dangle': 0,
    'react/jsx-no-bind': 0,
    'require-jsdoc': ['off', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true
      },
    }],
    'valid-jsdoc': 'off',
    'max-len': [2, 100, 2, { 'ignoreUrls': true, 'ignoreComments': true }],
    'no-param-reassign': ['error', { 'props': false }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'class-methods-use-this': 0,
  },
  settings: {
    'import/core-modules': [],
    'import/resolver': 'webpack',
  },
  env: {
    mocha: true
  }
};
