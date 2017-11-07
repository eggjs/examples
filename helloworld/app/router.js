'use strict';

module.exports = app => {
  app.get('/', app.controller.home.render);
  app.get('/foo', app.controller.foo.render);
};
