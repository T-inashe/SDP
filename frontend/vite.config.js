import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom environment for testing (simulates browser)
    environment: 'jsdom',
    // Setup file to run before each test
    setupFiles: './src/test/setup.js',
    // Enable global test functions (describe, it, expect)
    globals: true,
  }
})