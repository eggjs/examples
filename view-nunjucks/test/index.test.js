'use strict';

const mm = require('egg-mock');

describe('example view-nunjucks test', () => {
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
      .expect(/<h2>egg view example here, welcome foobar<\/h2>/)
      .expect(/<title>egg view example<\/title>/);
  });
});
