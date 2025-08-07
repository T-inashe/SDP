const request = require('supertest')
const app = require('./server')

describe('Server Endpoints', () => {
  describe('GET /', () => {
    it('should return API information', async () => {
      const response = await request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)

      expect(response.body).toHaveProperty('message', 'Language Learning Platform API')
      expect(response.body).toHaveProperty('version', '1.0.0')
      expect(response.body).toHaveProperty('status', 'running')
    })
  })

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200)

      expect(response.body).toHaveProperty('status', 'healthy')
      expect(response.body).toHaveProperty('timestamp')
      
      // Check that timestamp is a valid date
      const timestamp = new Date(response.body.timestamp)
      expect(timestamp instanceof Date).toBe(true)
      expect(timestamp.getTime()).not.toBeNaN()
    })
  })

  describe('GET /nonexistent', () => {
    it('should return 404 for unknown routes', async () => {
      const response = await request(app)
        .get('/nonexistent')
        .expect(404)

      expect(response.body).toHaveProperty('error', 'Route not found')
    })
  })
})