'use strict';


const mm = require('egg-mock');

describe('example middleware test', () => {
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
      .expect(app.config.hello.text);
  });
});
