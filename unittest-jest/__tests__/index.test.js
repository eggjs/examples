'use strict';

const mock = require('egg-mock');

describe('__tests__/index.test.js', () => {
  let app;
  beforeAll(() => {
    app = mock.app();
    return app.ready();
  });

  afterEach(mock.restore);
  afterAll(() => app.close());

  it('should app exist', () => {
    expect(app.test).toBe('123');
  });

  it('should status 200 and get the body', () => {
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect('hello world');
  });
});
