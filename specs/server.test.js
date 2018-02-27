const request = require('supertest');
const app = require('../server/server');

describe('Test the root path', () => {
  test('Server should connect to port', () => {
    return request(app).get('/restaurants').then(response => {
      expect(response.statusCode).toBe(200);
    })
  }); 
});
