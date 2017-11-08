'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async successAction() {
    const ctx = this.ctx;

    ctx.success({ foo: 'bar' });
  }

  async failAction() {
    const ctx = this.ctx;
    ctx.fail('something wrong');
  }
}

module.exports = ApiController;
