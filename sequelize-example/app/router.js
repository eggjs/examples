'use strict';

module.exports = app => {
  app.router.get('/users', 'user.users');
  app.router.get('/users/:id', 'user.user');
  app.router.post('/users', 'user.create');
  app.router.put('/users/:id', 'user.update');
  app.del('/users/:id', 'user.del');

  app.router.get('/posts', 'post.posts');
  app.router.get('/posts/:id', 'post.post');
  app.router.post('/users/:user_id/posts', 'post.create');
  app.router.put('/users/:user_id/posts/:id', 'post.update');
  app.del('/users/:user_id/posts/:id', 'post.del');
};
