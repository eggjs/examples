'use strict';


const mm = require('egg-mock');

describe('test/index.test.js', () => {
  let app;

  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should use custom framework', () => {
    return app.httpRequest()
      .get('/framework')
      .expect(200)
      .expect('example-framework');
  });

  it('should GET / with iOS', () => {
    return app.httpRequest()
      .get('/')
      .set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1')
      .expect(200)
      .expect('isIOS: true');
  });

  it('should GET / with non iOS', () => {
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect('isIOS: false');
  });
});
