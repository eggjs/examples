'use strict';

module.exports = function* form() {
  const result = yield this.curl('https://httpbin.org/post', {
    // 必须指定 method，支持 POST，PUT 和 DELETE
    method: 'POST',
    // 不需要设置 contentType，httpclient 会默认以 application/x-www-form-urlencoded 格式发送请求
    data: {
      // 注意：由于 form 格式发送的数据是无法区分类型的，所以服务端收到 now 字段将是字符串而不是数字
      now: Date.now(),
      foo: 'bar',
    },
    // 明确告诉 httpclient 以 JSON 格式处理响应 body
    dataType: 'json',
  });
  this.body = result.data.form;
};
