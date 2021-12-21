module.exports = {
    roots: ["<rootDir>/src"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
      ]
  }