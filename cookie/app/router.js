'use strict';

module.exports = app => {
  app.get('/', app.controller.cookie.home);
  app.get('/forget', app.controller.cookie.forget);
  app.post('/remember', app.controller.cookie.remember);
};
