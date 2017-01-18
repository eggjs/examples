'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/index.test.js', () => {
  let app;

  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET / with iOS', () => {
    return request(app.callback())
      .get('/')
      .set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1')
      .expect(200)
      .expect('isIOS: true');
  });

  it('should GET / with non iOS', () => {
    return request(app.callback())
      .get('/')
      .expect(200)
      .expect('isIOS: false');
  });
});
