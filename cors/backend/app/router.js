'use strict';

module.exports = app => {
  app.router.get('/api', app.controller.api.getData);
};
