const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('API Endpoints', () => {
  describe('GET /available_payments', () => {
    it('should return available payment methods', (done) => {
      request(app)
        .get('/available_payments')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('should return a welcome message with the username', (done) => {
      const userName = 'JohnDoe';
      request(app)
        .post('/login')
        .send({ userName })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal(`Welcome ${userName}`);
          done();
        });
    });
  });
});
