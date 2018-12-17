'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/controller/home.test.js', () => {
  let app;
  beforeAll(() => {
    app = mock.app();
    return app.ready();
  });

  afterEach(mock.restore);
  afterAll(() => app.close());

  it('should app exist', () => {
    assert(!!app.test);
    expect(app.test).toBe('123');
  });

  it('should status 200 and get the body', () => {
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect('hello world');
  });
});
