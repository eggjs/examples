'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('example cookie_session test', () => {
  let app;
  let cookie;

  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  it('should GET / first time', () => {
    return request(app.callback())
      .get('/')
      .expect(200)
      .expect(/^1 times/)
      .expect('Set-Cookie', /^EGG_SESS=[^;]+; path=\/; expires=[^;]+; httponly$/)
      .expect(res => {
        cookie = res.headers['set-cookie'][0].split(';')[0];
      });
  });

  it('should GET / second time', () => {
    return request(app.callback())
      .get('/')
      .set('Cookie', cookie)
      .expect(200)
      .expect(/^2 times/)
      // session.count change
      .expect('Set-Cookie', /^EGG_SESS=[^;]+; path=\/; expires=[^;]+; httponly$/);
  });
});
