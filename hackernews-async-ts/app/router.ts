import { Application } from 'egg';
module.exports = (app: Application) => {
  app.redirect('/', '/news');
  app.get('/news', 'news.list');
  app.get('/news/item/:id', 'news.detail');
  app.get('/news/user/:id', 'news.user');
};
