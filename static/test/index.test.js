'use strict';


const mm = require('egg-mock');

describe('example static test', () => {
  let app;

  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  it('should GET / 200', () => {
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect(/<li>Download <a href="\/public\/hi\.txt">hi\.txt<\/a>\.<\/li>/);
  });

  it('should GET /public/hi.txt', () => {
    return app.httpRequest()
      .get('/public/hi.txt')
      .expect(200)
      .expect('hi egg.\n你好，蛋蛋。\n');
  });
});
