'use strict';

module.exports = app => {
  app.get('/', app.controller.home.isIOS);
  app.get('/framework', app.controller.home.getFramework);
};
