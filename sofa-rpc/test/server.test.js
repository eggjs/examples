'use strict';

const mm = require('egg-mock');

describe('test/server.test.js', () => {
  let app;
  before(async function() {
    app = mm.app();
    await app.ready();
  });
  after(async function() {
    await app.close();
  });

  it('should invoke echoObj ok', done => {
    app.rpcRequest('ProtoService')
      .invoke('echoObj')
      .send([{
        name: 'gxcsoccer',
        group: 'B',
      }])
      .expect({
        code: 200,
        message: 'hello gxcsoccer, you are in 1',
      }, done);
  });
});
