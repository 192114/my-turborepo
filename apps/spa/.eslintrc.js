module.exports = {
  ...require('config/eslint-react'),
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
