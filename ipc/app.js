'use strict';

module.exports = app => {
  app.beforeStart(function* () {
    // ensure memory cache exists before app ready
    yield app.runSchedule('force_refresh');
  });

  const { messenger } = app;

  messenger.on('refresh', by => {
    app.logger.info('start update by %s', by);
    // create an anonymous context to access service
    const ctx = app.createAnonymousContext();
    // a convenient way to excute with generator function
    // can replaced by `co`
    ctx.runInBackground(function* () {
      yield ctx.service.source.update();
      app.lastUpdateBy = by;
    });
  });
};
