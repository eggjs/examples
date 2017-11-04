'use strict';

module.exports = async function get() {
  const result = await this.curl('https://httpbin.org/get?foo=bar');
  this.status = result.status;
  this.set(result.headers);
  this.body = result.data;
};
