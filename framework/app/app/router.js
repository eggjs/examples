'use strict';

module.exports = app => {
  app.router.get('/', app.controller.home.render);
};
