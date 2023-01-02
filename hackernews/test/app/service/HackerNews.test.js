const { app, assert, mock } = require('egg-mock/bootstrap');

describe('test/app/service/HackerNews.test.js', () => {
  afterEach(mock.restore);

  it('getTopStories', async () => {
    const ctx = app.mockContext();
    const list = await ctx.service.hackerNews.getTopStories();
    assert.equal(list.length, 30);
  });

  it('getItem', async () => {
    const ctx = app.mockContext();
    const item = await ctx.service.hackerNews.getItem(1);
    assert(item.hasOwnProperty('id') && item.hasOwnProperty('title') && item.hasOwnProperty('url'));
  });
});
