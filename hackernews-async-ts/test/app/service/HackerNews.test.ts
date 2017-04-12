'use strict';

import * as assert from 'assert';
import * as mm from 'egg-mock';

describe('test/app/service/HackerNews.test.js', () => {
  const app = mm.app();
  const ctx = app.mockContext();

  before(async () => {
    await app.ready();
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
