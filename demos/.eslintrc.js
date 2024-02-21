module.exports = {
  plugins: ['jest'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
        "jest/globals": true
      },
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
  },
};
