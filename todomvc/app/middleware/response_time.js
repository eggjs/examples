'use strict';

module.exports = options => {
  return async function responseTime(ctx, next) {
    const start = Date.now();
    await next();
    const cost = Date.now() - start;
    ctx.set(options.headerKey, `${cost}ms`);
  };
};
