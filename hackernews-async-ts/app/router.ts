import { Application } from 'egg';
module.exports = (app: Application) => {
  const controller = app.controller;
  app.redirect('/', '/news');
  app.get('/news', controller.news.list);
  app.get('/news/item/:id', controller.news.detail);
  app.get('/news/user/:id', controller.news.user);
};
