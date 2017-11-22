'use strict';

module.exports = app => {
  app.redirect('/', '/news');
  app.router.get('/news', 'news.list');
  app.router.get('/news/item/:id', 'news.detail');
  app.router.get('/news/user/:id', 'news.user');
};
