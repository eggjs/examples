'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/lib/framework.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'example',
      customEgg: true,
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, framework-example_123456')
      .expect(200);
  });
});

