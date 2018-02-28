'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.js');
  }

  async api() {
    const ctx = this.ctx;

    const url = 'http://jsonplaceholder.typicode.com' + ctx.path.replace(/^\/api/, '') + '?' + ctx.querystring;

    const res = await this.ctx.curl(url, {
      method: this.ctx.method,
    });
    ctx.body = res.data;
    ctx.status = res.status;
  }
}

module.exports = HomeController;
