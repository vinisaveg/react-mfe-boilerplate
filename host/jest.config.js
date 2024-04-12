module.exports = {
  roots: ["<rootDir>/"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!<rootDir>/src/index.ts",
    "!<rootDir>/src/bootstrap.tsx",
    "!<rootDir>/src/router/**",
    "!<rootDir>/src/config/**",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/config/setupTests.ts"],
}
