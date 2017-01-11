'use strict';

module.exports = app => {
  app.get('homepage', '/', 'home.index');
  app.post('postdata', '/post', 'home.post');
  app.get('session', '/session', 'home.session');
  app.get('user', '/user', 'home.user');
  app.get('httpclient', '/httpclient', 'home.httpclient');
};
