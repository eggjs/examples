'use strict';

const assert = require('assert');
const mm = require('egg-mock');

describe('test/app/service/HackerNews.test.js', () => {
  let app;
  let ctx;

  before(async () => {
    app = mm.app();
    await app.ready();
    ctx = app.mockContext();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('getTopStories', async () => {
    const list = await ctx.service.hackerNews.getTopStories();
    assert(list.length === 30);
  });

  it('getItem', async () => {
    const item = await ctx.service.hackerNews.getItem(1);
    assert(item.hasOwnProperty('id') && item.hasOwnProperty('title') && item.hasOwnProperty('url'));
  });
});
