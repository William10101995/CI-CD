const app = require('../app');
const request = require('supertest');

describe('GET /', () => {
    
    it('responds Hello World!', async () => {
       await request(app)
            .get('/')
            .expect('Hello World!'); 
    });
})