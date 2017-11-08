'use strict';

const mock = require('egg-mock');

describe('test/app/controller/home.test.js', () => {

  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect('hi, framework-example_123456');
  });
});
