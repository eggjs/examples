'use strict';

const Controller = require('egg').Controller;

class Home extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = 'hello world';
  }

  async post() {
    const ctx = this.ctx;
    ctx.body = ctx.request.body;
  }

  async session() {
    const ctx = this.ctx;
    ctx.body = {
      session: ctx.session,
    };
  }

  async user() {
    const ctx = this.ctx;
    const user = await ctx.service.user.get(ctx.query.name);
    ctx.body = {
      user,
    };
  }

  async httpclient() {
    const ctx = this.ctx;
    const res = await ctx.curl('https://eggjs.org');
    ctx.body = res.data.toString();
  }
}

module.exports = Home;
