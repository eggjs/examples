'use strict';

const assert = require('assert');
const mm = require('egg-mock');

describe('test/app/service/HackerNews.test.js', () => {
  let app;
  let ctx;

  before(function* () {
    app = mm.app();
    yield app.ready();
    ctx = app.mockContext();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('getTopStories', function* () {
    const list = yield ctx.service.hackerNews.getTopStories();
    assert(list.length === 30);
  });

  it('getItem', function* () {
    const item = yield ctx.service.hackerNews.getItem(1);
    assert(item.hasOwnProperty('id') && item.hasOwnProperty('title') && item.hasOwnProperty('url'));
  });
});
