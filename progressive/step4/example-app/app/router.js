'use strict';

module.exports = app => {
  app.get('/', async function() {
    this.body = `isIOS: ${this.isIOS}`;
  });

  app.get('/framework', async function() {
    this.body = this.app.config.framework.name;
  });
};
