'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.isIOS);
  router.get('/framework', controller.home.getFramework);
};
