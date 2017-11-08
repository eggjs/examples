'use strict';

exports.schedule = {
  interval: '10m',
  type: 'all', // run in all workers
};

exports.task = async function(ctx) {
  await ctx.service.source.update();
  ctx.app.lastUpdateBy = 'force';
};
