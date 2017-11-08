'use strict';

const Controller = require('egg').Controller;

class Home extends Controller {
  async render() {
    const ctx = this.ctx;
    ctx.body = `<ul>
      <li>Download <a href="/public/hi.txt">hi.txt</a>.</li>
      <li>Download <a href="/public/404.txt">404.txt</a>.</li>
      <li>Download <a href="/public/蛋蛋Web框架.txt">蛋蛋Web框架.txt</a>.</li>
      <li>Download <a href="/public/foo.js">foo.js</a>.</li>
    </ul>`;
  }
}

module.exports = Home;
