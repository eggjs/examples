'use strict';

module.exports = app => {
  app.router.get('/', 'home.render');
  app.router.get('/user', 'home.render');
  app.router.get('/login', 'home.local');

  app.passport.mount('weibo');
  app.passport.mount('github');
  app.passport.mount('bitbucket');
  app.passport.mount('twitter');
  const localStrategy = app.passport.authenticate('local');
  app.router.post('/passport/local', localStrategy);

  app.router.get('/logout', 'user.logout');
};
