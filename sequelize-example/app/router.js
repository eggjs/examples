'use strict';

module.exports = app => {
  app.get('/users', 'user.users');
  app.get('/users/:id', 'user.user');
  app.post('/users', 'user.create');
  app.put('/users/:id', 'user.update');
  app.del('/users/:id', 'user.del');

  app.get('/posts', 'post.posts');
  app.get('/posts/:id', 'post.post');
  app.post('/users/:user_id/posts', 'post.create');
  app.put('/users/:user_id/posts/:id', 'post.update');
  app.del('/users/:user_id/posts/:id', 'post.del');
};
