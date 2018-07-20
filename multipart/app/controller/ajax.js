'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const pump = require('mz-modules/pump');

class UploadAjaxController extends Controller {
  async show() {
    await this.ctx.render('page/ajax.html');
  }

  async upload() {
    const stream = await this.ctx.getFileStream();
    const filename = encodeURIComponent(stream.fields.name) + path.extname(stream.filename).toLowerCase();
    const target = path.join(this.config.baseDir, 'app/public', filename);
    const writeStream = fs.createWriteStream(target);
    await pump(stream, writeStream);

    this.ctx.body = { url: '/public/' + filename };
  }
}

module.exports = UploadAjaxController;
