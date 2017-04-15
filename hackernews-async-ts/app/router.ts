import { Application } from 'egg';
module.exports = (app: Application) => {
  const { news } = app.controller;

  app.redirect('/', '/news');
  app.get('/news', news.list);
  app.get('/news/item/:id', news.detail);
  app.get('/news/user/:id', news.user);
};
