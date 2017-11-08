'use strict';


const mm = require('egg-mock');

describe('test/controller/api.test.js', () => {
  let app;
  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  it('should get /success ok', () => {
    return app.httpRequest()
      .get('/success')
      .expect(200)
      .expect({ success: true, result: { foo: 'bar' } });
  });

  it('should get /fail ok', () => {
    return app.httpRequest()
      .get('/fail')
      .expect(200)
      .expect({ success: false, message: 'something wrong' });
  });
});
