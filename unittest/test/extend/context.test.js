'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/extend/context.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  describe('isXHR()', () => {
    it('should true', () => {
      const ctx = app.mockContext({
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
      assert(ctx.isXHR === true);
    });

    it('should false', () => {
      const ctx = app.mockContext({
        headers: {
          'X-Requested-With': 'SuperAgent',
        },
      });
      assert(ctx.isXHR === false);
    });
  });
});
