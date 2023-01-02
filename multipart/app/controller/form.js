const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream/promises');
const Controller = require('egg').Controller;

class UploadFormController extends Controller {
  async show() {
    await this.ctx.render('page/form.html');
  }

  async upload() {
    const stream = await this.ctx.getFileStream();
    const filename = encodeURIComponent(stream.fields.name) + path.extname(stream.filename).toLowerCase();
    const target = path.join(this.config.baseDir, 'app/public', filename);
    const writeStream = fs.createWriteStream(target);
    await pipeline(stream, writeStream);
    this.ctx.redirect('/public/' + filename);
  }
}

module.exports = UploadFormController;
