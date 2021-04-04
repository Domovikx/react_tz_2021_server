module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'plugin:security/recommended'],

  parserOptions: {
    project: './tsconfig.json',
  },

  plugins: ['security'],
};
