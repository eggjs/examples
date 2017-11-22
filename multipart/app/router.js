'use strict';

module.exports = app => {
  app.router.get('/', 'home.render');

  app.router.get('/ajax', app.controller.ajax.show);
  app.router.post('/ajax', app.controller.ajax.upload);

  app.router.get('/form', app.controller.form.show);
  app.router.post('/form', app.controller.form.upload);

  app.router.get('/multiple-file', app.controller.multiple.show);
  app.router.post('/multiple-file', app.controller.multiple.upload);

  app.router.get('/buffer', app.controller.buffer.show);
  app.router.post('/buffer', app.controller.buffer.upload);
};
