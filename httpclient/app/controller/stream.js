'use strict';

const fs = require('fs');

module.exports = function* stream() {
  // 上传当前文件本身用于测试
  const fileStream = fs.createReadStream(__filename);
  const url = `${this.protocol}://${this.host}/stream`;
  const result = yield this.curl(url, {
    // 必须指定 method，支持 POST，PUT
    method: 'POST',
    // 以 stream 模式提交
    stream: fileStream,
  });

  this.status = result.status;
  this.set(result.headers);
  this.body = result.data;
  // 响应最终会是类似以下的结果：
  // {"streamSize":574}
};
