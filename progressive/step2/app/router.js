'use strict';

module.exports = app => {
  app.get('/', async function() {
    this.body = `isIOS: ${this.isIOS}`;
  });
};
