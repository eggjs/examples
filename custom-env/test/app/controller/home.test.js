'use strict';

const mock = require('egg-mock');


describe('test/app/controller/home.test.js', () => {

  describe('prod', () => {
    let app;
    before(() => {
      mock.env('prod');
      app = mock.app({
        cache: false,
      });
      return app.ready();
    });
    after(() => app.close());

    it('should GET /', () => {
      return app.httpRequest()
        .get('/')
        .expect({
          env: 'prod',
          config: 'prod keys',
        })
        .expect(200);
    });
  });

  describe('sit', () => {
    let app;
    before(() => {
      mock.env('sit');
      app = mock.app({
        cache: false,
      });
      return app.ready();
    });
    after(() => app.close());

    it('should GET /', () => {
      return app.httpRequest()
        .get('/')
        .expect({
          env: 'sit',
          config: 'sit keys',
        })
        .expect(200);
    });
  });
});
