'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = `framework: ${this.app.config.framework.name}, isIOS: ${this.isIOS}`;
  });
};
