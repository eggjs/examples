'use strict';

module.exports = app => {
  const { router, controller } = app;
  app.redirect('/', '/news');
  router.get('/news', controller.news.list);
  router.get('/api/news', controller.api.list);
};

