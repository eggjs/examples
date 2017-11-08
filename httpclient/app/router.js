'use strict';

module.exports = app => {
  app.get('/', 'httpclient.home');
  app.get('/get', 'httpclient.get');
  app.get('/post', 'httpclient.post');
  app.get('/put', 'httpclient.put');
  app.get('/delete', 'httpclient.delete');
  app.get('/form', 'httpclient.form');
  app.get('/multipart', 'httpclient.multipart');
  app.get('/stream', 'httpclient.stream');
  app.post('/stream', 'httpclient.postStream');
  app.get('/error', 'httpclient.error');
};
