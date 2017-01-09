'use strict';

module.exports = function* home() {
  // 示例：请求一个 npm 模块信息
  const result = yield this.curl('https://registry.npm.taobao.org/egg/latest', {
    // 自动解析 JSON response
    dataType: 'json',
    // 3秒超时
    timeout: 3000,
  });

  this.body = {
    status: result.status,
    headers: result.headers,
    package: result.data,
  };
};
