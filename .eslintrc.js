module.exports = {
  'extends': 'eslint:recommended',
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'globals': {
    'React': true,
    'ReactDOM': false
  },
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
