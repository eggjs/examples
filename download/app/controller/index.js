'use strict';

const path = require('path');
const fs = require('fs');

module.exports = app => {
  class IndexController extends app.Controller {
    * index() {
      this.ctx.body = '<a download href="/download">download</a>';
    }

    * download() {
      const filePath = path.resolve(this.app.config.static.dir, 'hello.txt');
      this.ctx.attachment('hello.txt');
      this.ctx.set('Content-Type', 'application/octet-stream');
      this.ctx.body = fs.createReadStream(filePath);
    }
  }

  return IndexController;
};
