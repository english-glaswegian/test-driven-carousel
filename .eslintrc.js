// .eslintrc.js
module.exports = {
    extends:['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        node: true,
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true}],
        'comma-dangle': ['error', 'always-multiline'],
    },
    settings: {
        react: {
            version: '17.0.1',
        },
    },
};