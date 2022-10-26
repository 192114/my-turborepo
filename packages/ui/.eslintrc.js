const config = require('config/eslint-react.js')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'react/jsx-props-no-spreading': 'off'
  }
};
