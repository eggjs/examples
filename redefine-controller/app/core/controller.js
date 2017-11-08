'use strict';

const Controller = require('egg').Controller;

class CustomController extends Controller {
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

module.exports = CustomController;
