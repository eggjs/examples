'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/user', 'home.index');

  const weiboAuth = app.passport.authenticate('weibo');
  app.get('/passport/weibo', weiboAuth);
  app.get('/passport/weibo/callback', weiboAuth);

  const githubAuth = app.passport.authenticate('github');
  app.get('/passport/github', githubAuth);
  app.get('/passport/github/callback', githubAuth);

  const bitbucketAuth = app.passport.authenticate('bitbucket');
  app.get('/passport/bitbucket', bitbucketAuth);
  app.get('/passport/bitbucket/callback', bitbucketAuth);

  const twitterAuth = app.passport.authenticate('twitter');
  app.get('/passport/twitter', twitterAuth);
  app.get('/passport/twitter/callback', twitterAuth);

  app.get('/logout', 'user.logout');
};
