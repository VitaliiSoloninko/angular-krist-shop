module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "html", "js", "json"],
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  testMatch: ["**/+(*.)+(spec).+(ts|js)?(x)"],
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/main.ts",
    "!src/polyfills.ts",
    "!src/test.ts",
  ],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
};
