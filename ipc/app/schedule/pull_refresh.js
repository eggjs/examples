'use strict';

exports.schedule = {
  interval: '10s',
  type: 'worker', // only run in one worker
};

exports.task = async function(ctx) {
  const needRefresh = await ctx.service.source.checkUpdate();
  if (!needRefresh) return;

  // notify all workers to update memory cache from `file`
  ctx.app.messenger.sendToApp('refresh', 'pull');
};
