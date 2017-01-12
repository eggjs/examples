'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('example middleware test', () => {
  let app;

  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  it('should GET / 200', () => {
    return request(app.callback())
      .get('/')
      .expect(200)
      .expect(app.config.hello.text);
  });
});
