/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['next/core-web-vitals'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off'
  }
}

module.exports = config
