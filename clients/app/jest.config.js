const transformIgnoreModules = ["query-string", "decode-uri-component", "split-on-first", "filter-obj"].join("|");

module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  transformIgnorePatterns: [
    `node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|${transformIgnoreModules})`
  ],
  testPathIgnorePatterns: ["tools"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svgMock.js"
  },
  setupFiles: ["<rootDir>/jest/setup.ts"]
};
