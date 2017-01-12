'use strict';

module.exports = app => {
  app.get('/', 'home');
  app.get('/get', 'get');
  app.get('/post', 'post');
  app.get('/put', 'put');
  app.get('/delete', 'delete');
  app.get('/form', 'form');
  app.get('/multipart', 'multipart');
  app.get('/stream', 'stream');
  app.post('/stream', 'postStream');
  app.get('/error', 'error');
};
