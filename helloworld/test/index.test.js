'use strict';


const mm = require('egg-mock');

describe('example helloworld test', () => {
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
      .expect('Hello World');
  });

  it('should GET /foo', () => {
    return app.httpRequest()
      .get('/foo')
      .expect(200)
      .expect('Hello foo');
  });
});
