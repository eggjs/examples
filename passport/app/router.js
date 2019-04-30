'use strict';

module.exports = app => {
  app.router.get('/', 'home.render');
  app.router.get('/user', 'home.render');

  app.passport.mount('weibo');
  app.passport.mount('github');
  app.passport.mount('bitbucket');
  app.passport.mount('twitter');
  app.passport.mount('yuque');

  app.router.get('/logout', 'user.logout');
};
