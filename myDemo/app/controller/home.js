'use strict';

const Controller = require('egg').Controller;

class Home extends Controller {
  async render() {
    const ctx = this.ctx;
    this.logger.info('~~~~~~~~~~~~~~页面get参数~~~~~~~~' + ctx.request.query.id + '|' + ctx.query.id)
    this.logger.info('~~~~~~~~~~~~~~helper~~~~~~~~~~~~~~' + ctx.helper.formatUser(ctx.query.id))
    this.logger.info('~~~~~~~~~~~~~~this.config~~~~~~~~~~~~~~' + this.config.keys)
    this.logger.info('~~~~~~~~~~~ service/control this.logger.info ~~~~~~~~~~~~~~~~~~~~~')
    ctx.body = `<ul>
      <li>Download <a href="/public/hi.txt">hi.txt</a>.</li>
      <li>Download <a href="/public/404.txt">404.txt</a>.</li>
      <li>Download <a href="/public/蛋蛋Web框架.txt">蛋蛋Web框架.txt</a>.</li>
      <li>Download <a href="/public/foo.js">foo.js</a>.</li>
    </ul>`;
  }
}

module.exports = Home;
