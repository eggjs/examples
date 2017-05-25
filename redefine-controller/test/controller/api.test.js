'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/controller/api.test.js', () => {
  let app;
  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  it('should get /success ok', () => {
    return request(app.callback())
    .get('/success')
    .expect(200)
    .expect({ success: true, result: { foo: 'bar' } });
  });

  it('should get /fail ok', () => {
    return request(app.callback())
    .get('/fail')
    .expect(200)
    .expect({ success: false, message: 'something wrong' });
  });
});
