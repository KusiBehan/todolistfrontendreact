module.exports = {
  testEnvironment: "jsdom",
  rootDir: ".",
  modulePaths: ["../../frontend"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./setupJest.js"],
};
