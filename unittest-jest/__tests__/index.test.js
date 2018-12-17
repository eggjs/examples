'use strict';

const mock = require('egg-mock');

describe('test/controller/home.test.js', () => {
  let app;
  beforeAll(() => {
    app = mock.app();
    return app.ready();
  });

  afterEach(mock.restore);
  afterAll(() => app.close());

  describe('GET /', () => {
    it('should status 200 and get the body', () => {
      return app.httpRequest()
        .get('/')
        .expect(200)
        .expect('hello world');
    });
  });
});
