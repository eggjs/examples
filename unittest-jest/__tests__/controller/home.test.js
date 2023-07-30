'use strict';

const { app } = require('egg-mock/bootstrap');

describe('__tests__/controller/home.test.js', () => {
  it('should status 200 and get the body', () => {
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect('hello world');
  });
});
