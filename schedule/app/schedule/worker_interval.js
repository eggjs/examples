'use strict';

exports.schedule = {
  interval: 3000,
  type: 'worker',
};

exports.task = async function(ctx) {
  ctx.logger.info('worker&&interval');
};
