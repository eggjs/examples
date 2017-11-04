'use strict';

exports.index = async function index(ctx) {
  ctx.body = {
    env: ctx.app.config.env,
    config: ctx.app.config.keys,
  };
};
