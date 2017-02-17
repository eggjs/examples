'use strict';

module.exports = app => {
  class CustomController extends app.Controller {
    success(result) {
      this.ctx.body = {
        success: true,
        result,
      };
    }

    fail(message) {
      this.ctx.body = {
        success: false,
        message,
      };
    }
  }

  app.Controller = CustomController;
};
