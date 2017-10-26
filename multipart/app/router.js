'use strict';

module.exports = app => {
  app.get('/', 'home.render');

  app.get('/ajax', app.controller.ajax.show);
  app.post('/ajax', app.controller.ajax.upload);

  app.get('/form', app.controller.form.show);
  app.post('/form', app.controller.form.upload);

  app.get('/multiple-file', app.controller.multiple.show);
  app.post('/multiple-file', app.controller.multiple.upload);

  app.get('/buffer', app.controller.buffer.show);
  app.post('/buffer', app.controller.buffer.upload);
};
