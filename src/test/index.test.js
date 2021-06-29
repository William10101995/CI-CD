const app = require('../app');
const request = require('supertest');

describe('GET /', () => {
    
    it('responds Hello World!', async () => {
       await request(app)
            .get('/')
            .expect('El Resultado de la Suma es 6'); 
    });
})