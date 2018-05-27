'use strict';

const { mock, assert } = require('egg-mock/bootstrap');

describe('test/unittest/app/service/HackerNews.test.js', () => {
  let app;
  let ctx;

  before(async () => {
    app = mock.app();
    await app.ready();
    ctx = app.mockContext();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('getTopStories', async () => {
    const list = await ctx.service.hackerNews.getTopStories();
    assert(list.length === 30);
  });
});
