'use strict';

module.exports = () => {
  return function* (next) {
    try {
      yield next;
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      /* istanbul ignore if */
      if (this.app.config.env !== 'unittest') {
        this.app.emit('error', err, this);
      }
      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const message = status === 500 && this.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;
      // 从 error 对象上读出各个属性，设置到响应中
      this.body = { message };
      this.status = status;
    }
  };
};
