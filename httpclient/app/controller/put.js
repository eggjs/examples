'use strict';

module.exports = function* put() {
  const result = yield this.curl('https://httpbin.org/put', {
    // 必须指定 method
    method: 'PUT',
    // 通过 contentType 告诉 httpclient 以 JSON 格式发送
    contentType: 'json',
    data: {
      update: 'foo bar',
    },
    // 明确告诉 httpclient 以 JSON 格式处理响应 body
    dataType: 'json',
  });
  this.body = result.data;
};
