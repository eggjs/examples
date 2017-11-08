'use strict';

const mm = require('egg-mock');

describe('example cookie test', () => {
  let app;

  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  it('should GET / show "remember me" checkbox when cookie.remember not exists', () => {
    return app.httpRequest()
      .get('/')
      .expect(200)
      .expect(/<input type="checkbox" name="remember"\/> remember me<\/label>/);
  });

  it('should POST /remember to set cookie.remember = 1', () => {
    return app.httpRequest()
      .post('/remember')
      .send({
        remember: 'true',
      })
      .expect(302)
      .expect('Location', '/')
      .expect('Set-Cookie', /^remember=1; path=\/; expires=[^;]+; httponly,remember\.sig=[^;]+; path=\/; expires=[^;]+; httponly$/);
  });

  it('should GET /forget to delete cookie.remember', () => {
    return app.httpRequest()
      .get('/forget')
      .expect(302)
      .expect('Location', '/')
      .expect('Set-Cookie', /^remember=; path=\/; expires=[^;]+; httponly,remember\.sig=; path=\/; expires=[^;]+; httponly$/);
  });
});
