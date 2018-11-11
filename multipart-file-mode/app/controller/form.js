'use strict';

const fs = require('mz/fs');
const path = require('path');
const pump = require('mz-modules/pump');
const Controller = require('egg').Controller;

module.exports = class extends Controller {
  async show() {
    await this.ctx.render('page/form.html');
  }

  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    if (!file) return ctx.throw(404);

    const filename = encodeURIComponent(ctx.request.body.name) + path.extname(file.filename).toLowerCase();
    const targetPath = path.join(this.config.baseDir, 'app/public', filename);
    const source = fs.createReadStream(file.filepath);
    const target = fs.createWriteStream(targetPath);

    try {
      await pump(source, target);
      ctx.logger.warn('save %s to %s', file.filepath, targetPath);
    } finally {
      // delete those request tmp files
      await ctx.cleanupRequestFiles();
    }

    ctx.redirect('/public/' + filename);
  }
};
