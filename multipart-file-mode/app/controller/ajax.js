'use strict';

const fs = require('mz/fs');
const path = require('path');
const Controller = require('egg').Controller;
const pump = require('mz-modules/pump');

module.exports = class extends Controller {
  async show() {
    await this.ctx.render('page/ajax.html');
  }

  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    if (!file) return ctx.throw(404);

    const filename = encodeURIComponent(ctx.request.body.name) + path.extname(file.filename).toLowerCase();
    const targetPath = path.join(this.config.baseDir, 'app/public', filename);
    const source = fs.createReadStream(file.filepath);
    const target = fs.createWriteStream(targetPath);
    await pump(source, target);
    ctx.logger.warn('save %s to %s', file.filepath, targetPath);
    // delete tmp file
    await fs.unlink(file.filepath);

    ctx.body = { url: '/public/' + filename };
  }
};
