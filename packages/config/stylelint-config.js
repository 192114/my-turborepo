module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    "number-max-precision": [
      4,
      {
        "severity": "warning"
      }
    ],
    "unit-allowed-list": ["em", "rem", "px", "s", "deg", "%", "vw", "vh"]
  }
}
