'use strict';

const initDatabase = require('./config/database/init');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didLoad() {
    await initDatabase(this.app);
  }
}

module.exports = AppBootHook;
