'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const sleep = require('mz-modules/sleep');

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', async function() {
    await sleep(1000);
    return app.httpRequest()
      .get('/')
      .expect('{"code":200,"message":"hello gxcsoccer, you are in 0"}')
      .expect(200);
  });
});
