'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async setSession() {
    const ctx = this.ctx;

    ctx.session.count = (ctx.session.count || 0) + 1;
    ctx.body = `${ctx.session.count} times, now: ${Date()}`;
  }

}

module.exports = HomeController;
