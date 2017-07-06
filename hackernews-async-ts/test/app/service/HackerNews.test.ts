'use strict';

import * as assert from 'assert';
import { Context } from 'egg';
import * as mm from 'egg-mock';

describe('test/app/service/HackerNews.test.js', () => {
  const app = mm.app();
  let ctx: Context;

  before(async () => {
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
    assert(item.id && item.title && item.url);
  });
});
