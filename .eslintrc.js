module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
    es2022: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
  },
};
