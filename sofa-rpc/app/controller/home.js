'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.proxy.protoService.echoObj({
      name: 'gxcsoccer',
      group: 'A',
    });
    ctx.body = res;
  }
}

module.exports = HomeController;
