module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "jest", "import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "**/__mocks__/**",
  ],
  rules: {
    "max-len": [2, { code: 120, tabWidth: 4, ignoreUrls: true }],
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
