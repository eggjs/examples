'use strict';

module.exports = app => {
  app.router.get('/', 'httpclient.home');
  app.router.get('/get', 'httpclient.get');
  app.router.get('/post', 'httpclient.post');
  app.router.get('/put', 'httpclient.put');
  app.router.get('/delete', 'httpclient.del');
  app.router.get('/form', 'httpclient.form');
  app.router.get('/multipart', 'httpclient.multipart');
  app.router.get('/files', 'httpclient.files');
  app.router.get('/stream', 'httpclient.stream');
  app.router.post('/stream', 'httpclient.postStream');
  app.router.get('/error', 'httpclient.error');
};
