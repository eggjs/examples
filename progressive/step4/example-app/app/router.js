'use strict';

module.exports = app => {
  app.router.get('/', app.controller.home.isIOS);
  app.router.get('/framework', app.controller.home.getFramework);
};
