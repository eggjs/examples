'use strict';

module.exports = function* post() {
  const result = yield this.curl('https://httpbin.org/post', {
    // 必须指定 method
    method: 'POST',
    // 通过 contentType 告诉 httpclient 以 JSON 格式发送
    contentType: 'json',
    data: {
      hello: 'world',
      now: Date.now(),
    },
    // 明确告诉 httpclient 以 JSON 格式处理响应 body
    dataType: 'json',
  });
  this.body = result.data;
};
