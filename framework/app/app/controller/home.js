'use strict';

const Controller = require('yadan').Controller;

class HomeController extends Controller {
  async render() {
    const ctx = this.ctx;

    // use service defined in framework
    const data = await ctx.service.test.get(123);
    await ctx.render('home.tpl', data);
  }
}

module.exports = HomeController;
