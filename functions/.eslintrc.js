module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'google',
    ],
    rules: {
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'max-len': ['error', 150],
    },
    parserOptions: {
        'ecmaVersion': 2020,
    },
};
