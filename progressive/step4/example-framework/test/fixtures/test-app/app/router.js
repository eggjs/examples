'use strict';

module.exports = app => {
  app.router.get('/', async function() {
    this.body = `framework: ${this.app.config.framework.name}, isIOS: ${this.isIOS}`;
  });
};
