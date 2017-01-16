'use strict';

const mock = require('egg-mock');
const request = require('supertest');

describe('test/app/controller/home.test.js', () => {

  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect(200)
      .expect('hi, framework-example_123456');
  });
});
