'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html');
  }

  async api() {
    const ctx = this.ctx;

    const url = 'https://h5.ele.me' + ctx.path.replace(/^\/api/, '') + '?' + ctx.querystring;

    console.log(url);
    const res = await this.ctx.curl(url, {
      method: this.ctx.method,
    });
    ctx.body = res.data;
    ctx.status = res.status;
  }
}

module.exports = HomeController;
