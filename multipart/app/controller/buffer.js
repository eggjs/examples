'use strict';

const fs = require('mz/fs');
const path = require('path');
const Controller = require('egg').Controller;
const toArray = require('stream-to-array');
const sendToWormhole = require('stream-wormhole');

class UploadBufferController extends Controller {
  async show() {
    await this.ctx.render('page/buffer.html');
  }

  async upload() {
    const stream = await this.ctx.getFileStream();
    let buf;
    try {
      const parts = await toArray(stream);
      buf = Buffer.concat(parts);
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }

    const filename = encodeURIComponent(stream.fields.name) + path.extname(stream.filename).toLowerCase();
    const target = path.join(this.config.baseDir, 'app/public', filename);
    await fs.writeFile(target, buf);

    this.ctx.redirect('/public/' + filename);
  }
}

module.exports = UploadBufferController;
