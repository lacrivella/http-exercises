const request = require('supertest');
const app = require('../lib/app');

describe('application routes', () => {
  it('has red as route', done => {
    request(app)
      .get('/red')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toContain('red');
        done();
      });
  });

  it('has green as route', done => {
    request(app)
      .get('/green')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toContain('green');
        done();
      });
  });

  it('has blue as route', done => {
    request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toContain('blue');
        done();
      });
  });
});