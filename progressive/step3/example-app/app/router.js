'use strict';

module.exports = app => {
  app.get('/', async function(ctx) {
    ctx.body = `isIOS: ${ctx.isIOS}`;
  });
};
