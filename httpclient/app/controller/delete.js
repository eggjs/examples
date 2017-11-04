'use strict';

module.exports = async function del() {
  const result = await this.curl('https://httpbin.org/delete', {
    // 必须指定 method
    method: 'DELETE',
    dataType: 'json',
  });
  this.body = result.data;
};
