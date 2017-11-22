'use strict';

module.exports = app => {
  app.router.get('/', async function() {
    this.body = `isIOS: ${this.isIOS}`;
  });
};
