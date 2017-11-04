'use strict';

const assert = require('assert');

module.exports = (options, app) => {
  return async function(next) {
    assert.deepEqual(options, app.config.hello);
    this.body = options.text;
    await next;
  };
};
