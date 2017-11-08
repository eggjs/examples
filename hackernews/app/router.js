'use strict';

module.exports = app => {
  app.redirect('/', '/news');
  app.get('/news', 'news.list');
  app.get('/news/item/:id', 'news.detail');
  app.get('/news/user/:id', 'news.user');
};
