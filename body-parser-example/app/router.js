'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.post('/api/body', controller.home.body);
  router.post('/api/xml', controller.home.xml);
};
