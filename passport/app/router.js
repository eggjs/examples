'use strict';

module.exports = app => {
  app.get('/', 'home.render');
  app.get('/user', 'home.render');

  app.passport.mount('weibo');
  app.passport.mount('github');
  app.passport.mount('bitbucket');
  app.passport.mount('twitter');

  app.get('/logout', 'user.logout');
};
