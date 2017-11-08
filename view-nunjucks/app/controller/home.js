'use strict';

const Controller = require('egg').Controller;

class Home extends Controller {
  async render() {
    const ctx = this.ctx;
    await ctx.render('home.html', {
      user: {
        name: 'foobar',
      },
      title: 'egg view example',
    });
  }
}

module.exports = Home;
