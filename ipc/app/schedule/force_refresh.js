'use strict';

exports.schedule = {
  interval: '10m',
  type: 'all', // run in all workers
};

exports.task = function* (ctx) {
  yield ctx.service.source.update();
  ctx.app.lastUpdateBy = 'force';
};
