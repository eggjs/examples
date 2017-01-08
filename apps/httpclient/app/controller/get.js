'use strict';

module.exports = function* get() {
  const result = yield this.curl('https://httpbin.org/get?foo=bar');
  this.status = result.status;
  this.set(result.headers);
  this.body = result.data;
};
