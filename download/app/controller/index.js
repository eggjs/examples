'use strict';

const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = [
      '<a download href="/download">download</a>',
      '<br>',
      '<a download href="/download-image">download image</a>',
    ].join('');
  }

  async download() {
    const filePath = path.resolve(this.app.config.static.dir, 'hello.txt');
    this.ctx.attachment('hello.txt');
    this.ctx.set('Content-Type', 'application/octet-stream');
    this.ctx.body = fs.createReadStream(filePath);
  }

  async downloadImage() {
    const url = 'http://cdn2.ettoday.net/images/1200/1200526.jpg';
    const res = await this.ctx.curl(url, {
      streaming: true,
    });

    this.ctx.type = 'jpg';
    this.ctx.body = res.res;
  }
}

module.exports = IndexController;
