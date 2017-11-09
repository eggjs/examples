'use strict';

const Controller = require('egg').Controller;

class Home extends Controller {
  async isIOS() {
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`;
  }
}

module.exports = Home;
