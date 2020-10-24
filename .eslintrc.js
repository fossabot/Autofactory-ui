module.exports = {
    root: true,
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-var': 'error',
        'prefer-const': 'error',
    },
    globals: {},
    parserOptions: {
        ecmaVersion: 2020,
    },
    env: {
        node: true,
        es6: true,
    },
};
