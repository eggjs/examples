'use strict';

module.exports = () => {
  return function* (next) {
    try {
      yield next;
    } catch (err) {
      this.app.emit('error', err, this);

      const status = err.status || 500;
      const error = status === 500 && this.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;

      this.body = { error };
      if (status === 422) {
        this.body.detail = err.errors;
      }
      this.status = status;
    }
  };
};
