'use strict';

module.exports = app => {
  app.get('/', async function(ctx) {
    ctx.body = `isIOS: ${ctx.isIOS}`;
  });

  app.get('/framework', async function(ctx) {
    ctx.body = ctx.app.config.framework.name;
  });
};
