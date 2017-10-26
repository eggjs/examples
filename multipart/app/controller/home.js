'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async render() {
    await this.ctx.render('index.html');
  }

}

module.exports = HomeController;
// module.exports = function* () {
//   this.body = `<form method="post" enctype="multipart/form-data" action="/upload?_csrf=${this.csrf}">
//     <p>Title: <input type="text" name="title" /></p>
//     <p>Image: <input type="file" name="image" /></p>
//     <p><input type="submit" value="Upload" /></p>
//     </form>`;
// };
