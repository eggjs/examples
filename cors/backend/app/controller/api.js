'use strict';

const Controller = require('egg').Controller;

class APIController extends Controller {

  async getData() {
    const ctx = this.ctx;

    ctx.body = { a: 1 };
  }

}

module.exports = APIController;
