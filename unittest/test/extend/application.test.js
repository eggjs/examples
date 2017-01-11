'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/extend/application.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  describe('get lru', () => {
    it('should get a lru and it work', () => {
      app.lru.set('foo', 'bar');
      assert(app.lru.get('foo') === 'bar');
    });
  });
});
