module.exports = {
  // Test environment (Node.js, not browser)
  testEnvironment: 'node',
  
  // Look for test files in these patterns
  testMatch: [
    '**/__tests__/**/*.js',
    '**/*.test.js'
  ],
  
  // Coverage settings
  collectCoverageFrom: [
    '**/*.js',
    '!node_modules/**',
    '!coverage/**',
    '!jest.config.js'
  ],
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Verbose output shows individual test results
  verbose: true
}