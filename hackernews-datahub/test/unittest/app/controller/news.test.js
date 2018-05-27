'use strict';

const { mock } = require('egg-mock/bootstrap');

describe('test/app/controller/news.test.js', () => {
  let app;
  before(async () => {
    app = mock.app();
    await app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /news', async () => {
    await app.httpRequest().get('/news').expect(200);
  });
});
