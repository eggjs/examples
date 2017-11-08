'use strict';

const Controller = require('egg').Controller;

class Api extends Controller {
  index() {
    const { ctx, service } = this;
    ctx.body = {
      index: service.source.get('index'),
      lastUpdateBy: ctx.app.lastUpdateBy,
    };
  }
}

module.exports = Api;
