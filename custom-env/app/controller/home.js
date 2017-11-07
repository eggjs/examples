'use strict';

const Controller = require('egg').Controller;

class EnvController extends Controller {
  async getEnv() {
    const ctx = this.ctx;

    ctx.body = {
      env: ctx.app.config.env,
      config: ctx.app.config.keys,
    };
  }
}

module.exports = EnvController;
