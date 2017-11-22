'use strict';

module.exports = app => {
  app.router.get('homepage', '/', 'home.index');
  app.router.post('postdata', '/post', 'home.post');
  app.router.get('session', '/session', 'home.session');
  app.router.get('user', '/user', 'home.user');
  app.router.get('httpclient', '/httpclient', 'home.httpclient');
};
