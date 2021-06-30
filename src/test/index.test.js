const app = require('../app');
const request = require('supertest');

describe('GET /', () => {
    
    it('Test Response', async () => {
       await request(app)
            .get('/')
            .expect('El Resultado del Producto es 6'); 
    });
})