'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class UploadMultipleController extends Controller {
  async show() {
    await this.ctx.render('page/multiple.html');
  }

  async upload() {
    const parts = this.ctx.multipart({ autoFields: true });
    const files = [];

    let stream;
    while ((stream = await parts()) != null) {
      const filename = stream.filename.toLowerCase();
      const target = path.join(this.config.baseDir, 'app/public', filename);
      const writeStream = fs.createWriteStream(target);
      try {
        await awaitWriteStream(stream.pipe(writeStream));
      } catch (err) {
        await sendToWormhole(stream);
        throw err;
      }
      files.push(filename);
    }

    await this.ctx.render('page/multiple_result.html', {
      fields: Object.keys(parts.field).map(key => ({ key, value: parts.field[key] })),
      files,
    });
  }
}

module.exports = UploadMultipleController;
