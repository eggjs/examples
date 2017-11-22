'use strict';

module.exports = app => {
  app.router.get('/', app.controller.home.render);
  app.router.get('/foo', app.controller.foo.render);
};
