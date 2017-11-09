'use strict';

const Controller = require('example-framework').Controller;

class Home extends Controller {
  async isIOS() {
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`;
  }

  async getFramework() {
    this.ctx.body = this.ctx.app.config.framework.name;
  }
}

module.exports = Home;
