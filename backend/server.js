const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet()) // Security headers
app.use(cors()) // Allow cross-origin requests
app.use(morgan('combined')) // Log requests
app.use(express.json()) // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Language Learning Platform API',
    version: '1.0.0',
    status: 'running'
  })
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler - Fixed: Use a function without path parameter
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Start server (only if this file is run directly)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  })
}

// Export for testing
module.exports = app