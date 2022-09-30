module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends:[
    'next',
    'airbnb',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx', '.ts', '.jsx', '.js']}],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'lines-between-class-members': ['error', 'always'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],

}