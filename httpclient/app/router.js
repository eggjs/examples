'use strict';

module.exports = app => {
  app.get('/', app.controller.home);
  app.get('/get', app.controller.get);
  app.get('/post', app.controller.post);
  app.get('/put', app.controller.put);
  app.get('/delete', app.controller.delete);
  app.get('/form', app.controller.form);
  app.get('/multipart', app.controller.multipart);
  app.get('/stream', app.controller.stream);
  app.post('/stream', app.controller.postStream);
  app.get('/error', app.controller.error);
};
