module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': ['plugin:react/recommended', 'react-app', 'eslint:recommended'],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'plugins': [
        'react'
    ],
    'rules': {
      'quotes': ['error', 'single'],
      'react/prop-types': 'off',
      'react/jsx-key' : 'off',
    }
}
