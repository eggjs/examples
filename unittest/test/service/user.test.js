'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/service/user.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('get()', () => {
    it('should get exists user', function* () {
      const ctx = app.mockContext();
      const user = yield ctx.service.user.get('fengmk2');
      assert(user);
      assert(user.name === 'fengmk2');
    });

    it('should get null when user not exists', function* () {
      const ctx = app.mockContext();
      const user = yield ctx.service.user.get('fengmk1');
      assert(!user);
    });

    it('should mock fengmk1 exists', function* () {
      const ctx = app.mockContext();
      app.mockService('user', 'get', function* () {
        return {
          name: 'fengmk1',
        };
      });
      const user = yield ctx.service.user.get('fengmk1');
      assert(user);
      assert(user.name === 'fengmk1');
    });
  });
});
