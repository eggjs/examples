import { Application } from 'egg';

export default (app: Application) => {
  const controller = app.controller;
  app.redirect('/', '/news');
  app.router.get('/news', controller.news.list);
  app.router.get('/news/item/:id', controller.news.detail);
  app.router.get('/news/user/:id', controller.news.user);
};
