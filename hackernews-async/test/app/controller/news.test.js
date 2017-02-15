'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
const cheerio = require('cheerio');

describe('test/app/controller/news.test.js', () => {
  let app;
  before(async () => {
    app = mm.app();
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET /news', async () => {
    const result = await request(app.callback()).get('/news').expect(200);
    const $ = cheerio.load(result.text);
    const listItem = $('.news-view .item');
    assert(listItem.length === app.config.news.pageSize);
  });

  it('should GET /news/item/:id', async () => {
    await request(app.callback())
    .get('/news/item/1')
    .expect(/\/news\/item\/1/) // just a example, use regex to test part of dom string, but should be strong characteristic
    .expect(200);
  });

  it('should GET /news/user/:id', async () => {
    await request(app.callback())
    .get('/news/user/activatedgeek')
    .expect(/<span class="label">user:<\/span> activatedgeek/) // just a example, use regex to test part of dom string, but should be strong characteristic
    .expect(200);
  });
});
