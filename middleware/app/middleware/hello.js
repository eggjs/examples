'use strict';

const assert = require('assert');

module.exports = (options, app) => {
  return async function(ctx, next) {
    assert.deepEqual(options, app.config.hello);
    ctx.body = options.text;
    await next();
  };
};
