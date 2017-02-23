'use strict';

const sleep = require('mz-modules/sleep');

module.exports = app => {
  let memoryCache = {};

  return class Source extends app.Service {

    get(key) {
      return memoryCache[key];
    }

    * checkUpdate() {
      // check if remote data source has changed
      const updated = yield mockCheck();
      this.ctx.logger.info('check update response %s', updated);
      return updated;
    }

    * update() {
      // update memory cache from remote
      memoryCache = yield mockFetch();
      this.ctx.logger.info('update memory cache from remote: %j', memoryCache);
    }
  };
};

let index = 0;
function* mockFetch() {
  yield sleep(100);
  return {
    index: index++,
  };
}

function* mockCheck() {
  yield sleep(100);
  return Math.random() > 0.5;
}
