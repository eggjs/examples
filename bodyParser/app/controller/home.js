'use strict';

const Controller = require('egg').Controller;
const { xml2js } = require('xml-js');

class HomeController extends Controller {
  async body() {
    const { ctx } = this;

    ctx.body = {
      type: ctx.get('content-type'),
      body: ctx.request.body,
    };
  }

  async xml() {
    const { ctx } = this;

    const xmlContent = xml2js(ctx.request.body);
    const body = xmlContent.elements[0].attributes;

    ctx.body = {
      type: ctx.get('content-type'),
      body,
    };
  }
}

module.exports = HomeController;
