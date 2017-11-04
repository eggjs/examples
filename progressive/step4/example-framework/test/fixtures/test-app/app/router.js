'use strict';

module.exports = app => {
  app.get('/', async function() {
    this.body = `framework: ${this.app.config.framework.name}, isIOS: ${this.isIOS}`;
  });
};
