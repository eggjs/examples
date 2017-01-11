'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/extend/helper.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  describe('money()', () => {
    it('should RMB', () => {
      const ctx = app.mockContext({
        // 模拟 ctx 的 headers
        headers: {
          'Accept-Language': 'zh-CN,zh;q=0.5',
        },
      });
      assert(ctx.helper.money(100) === '￥ 100');
    });

    it('should US Dolar', () => {
      const ctx = app.mockContext();
      assert(ctx.helper.money(100) === '$ 100');
    });
  });
});
