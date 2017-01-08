'use strict';

module.exports = function* del() {
  const result = yield this.curl('https://httpbin.org/delete', {
    // 必须指定 method
    method: 'DELETE',
    dataType: 'json',
  });
  this.body = result.data;
};
