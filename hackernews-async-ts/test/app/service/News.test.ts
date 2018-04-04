'use strict';

import { Context } from 'egg';
import { app, assert } from 'egg-mock/bootstrap';

describe('test/app/service/News.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('getTopStories', async () => {
    const list = await ctx.service.news.getTopStories();
    assert(list.length === 30);
  });

  it('getItem', async () => {
    const item = await ctx.service.news.getItem(1);
    assert(item.id && item.title && item.url);
  });
});
