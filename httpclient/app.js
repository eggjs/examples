'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    // 示例：启动的时候去读取 https://registry.npm.taobao.org/egg/latest 的版本信息
    const result = await app.curl('https://registry.npm.taobao.org/egg/latest', {
      dataType: 'json',
    });
    app.logger.info('egg latest version: %s', result.data.version);
  });
};
