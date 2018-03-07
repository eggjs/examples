'use strict';

module.exports = {
  get resourceBase() {
    const config = this.app.config;
    return `${config.assets.url}/`;
  },
};
