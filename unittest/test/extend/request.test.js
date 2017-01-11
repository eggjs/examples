'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/extend/request.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  describe('isChrome()', () => {
    it('should true', () => {
      const ctx = app.mockContext({
        headers: {
          'User-Agent': 'Chrome/56.0.2924.51',
        },
      });
      assert(ctx.request.isChrome === true);
    });

    it('should false', () => {
      const ctx = app.mockContext({
        headers: {
          'User-Agent': 'FireFox/1',
        },
      });
      assert(ctx.request.isChrome === false);
    });
  });
});
