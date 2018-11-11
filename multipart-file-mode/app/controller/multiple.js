'use strict';

const fs = require('mz/fs');
const path = require('path');
const pump = require('mz-modules/pump');
const Controller = require('egg').Controller;

module.exports = class extends Controller {
  async show() {
    await this.ctx.render('page/multiple.html');
  }

  async upload() {
    const { ctx } = this;
    const files = ctx.request.files;
    ctx.logger.warn('files: %j', files);

    try {
      for (const file of files) {
        const filename = file.filename.toLowerCase();
        const targetPath = path.join(this.config.baseDir, 'app/public', filename);
        const source = fs.createReadStream(file.filepath);
        const target = fs.createWriteStream(targetPath);
        await pump(source, target);
        ctx.logger.warn('save %s to %s', file.filepath, targetPath);
      }
    } finally {
      // delete those request tmp files
      await ctx.cleanupRequestFiles();
    }

    const fields = [];
    for (const k in ctx.request.body) {
      fields.push({
        key: k,
        value: ctx.request.body[k],
      });
    }

    await ctx.render('page/multiple_result.html', {
      fields,
      files,
    });
  }
};
