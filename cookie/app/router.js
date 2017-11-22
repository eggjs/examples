'use strict';

module.exports = app => {
  app.router.get('/', app.controller.cookie.home);
  app.router.get('/forget', app.controller.cookie.forget);
  app.router.post('/remember', app.controller.cookie.remember);
};
