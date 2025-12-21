import assert from 'node:assert/strict';

import { Context } from 'egg';
import { app } from '@eggjs/mock/bootstrap';

describe('test/app/service/News.test.ts', () => {
  let ctx: Context;

  before(() => {
    ctx = app.mockContext();
  });

  it('getTopStories', async () => {
    const list = await ctx.service.news.getTopStories();
    assert.equal(list.length, 30);
  });

  it('getItem', async () => {
    const item = await ctx.service.news.getItem(1);
    console.log(item);
    assert(item.id && item.title && item.url);
  });
});
