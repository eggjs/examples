'use strict';

module.exports = () => {
  return async function(ctx, next) {
    try {
      await next();
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
