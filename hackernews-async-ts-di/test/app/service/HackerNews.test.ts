'use strict';

import * as assert from 'assert';
import { Context } from 'egg';
import { getComponent } from 'egg-di';
import mm from 'egg-mock';
import { HackerNews } from '../../../app/service/HackerNews';

describe('test/app/service/HackerNews.test.js', () => {
  const app = mm.app();
  let ctx: Context;
  let hackerNews: HackerNews;

  before(async () => {
    await app.ready();
    ctx = app.mockContext();
    hackerNews = getComponent(HackerNews, ctx);
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('getTopStories', async () => {
    const list = await hackerNews.getTopStories();
    assert(list.length === 30);
  });

  it('getItem', async () => {
    const item = await hackerNews.getItem(1);
    assert(item.id && item.title && item.url);
  });
});
