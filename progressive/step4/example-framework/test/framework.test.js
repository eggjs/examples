'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/framework.test.js', () => {
  let app;

  before(() => {
    app = mm.app({
      baseDir: 'test-app',
      customEgg: true,
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1')
      .expect(200)
      .expect('framework: example-framework, isIOS: true');
  });
});
