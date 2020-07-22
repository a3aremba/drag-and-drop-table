module.exports = {
  plugins: ["react", "import"],
  parser: "babel-eslint",
  root: true,
  env: {
    es6: true,
    browser: true
  },
  overrides: [
    { files: ["packages/*/src/**/*.test.js"], env: { jest: true } },
    { files: ["packages/*/scripts/**/*.js"], env: { node: true } },
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    quotes: ["error", "double"],
    camelcase: 0,
    semi: [2, "always"],
    "arrow-body-style": 0,
    "no-return-assign": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 0,
    "react/button-has-type": 0,
    "import/prefer-default-export": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-duplicates": 0,
    "no-cond-assign": 0,
    "no-console": [0],
    "no-confusing-arrow": 0,
    "no-underscore-dangle": 0,
    "prefer-destructuring": 0,
    "jsx-a11y/aria-role": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "arrow-parens": [2, "as-needed"],
    "implicit-arrow-linebreak": 0,
    "no-use-before-define": ["error", "nofunc"],
    "function-paren-newline": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    indent: 0
  }
};
