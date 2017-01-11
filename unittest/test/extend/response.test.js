'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/extend/response.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  describe('isSuccess()', () => {
    it('should true', () => {
      const ctx = app.mockContext();
      ctx.status = 200;
      assert(ctx.response.isSuccess === true);
    });

    it('should false', () => {
      const ctx = app.mockContext();
      ctx.status = 404;
      assert(ctx.response.isSuccess === false);
    });
  });
});
