module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        quotes: ['error', 'single'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
