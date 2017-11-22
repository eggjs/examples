'use strict';

module.exports = app => {
  app.router.get('/success', 'api.successAction');
  app.router.get('/fail', 'api.failAction');
};
