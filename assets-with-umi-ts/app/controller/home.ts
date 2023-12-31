import { Controller } from 'egg';
import { RequestOptions2 } from 'urllib';

export default class HomeController extends Controller {
   async index() {
    await this.ctx.render('index.html');
  }

   async api() {
    const ctx = this.ctx;

    const url = 'https://h5.ele.me' + ctx.path.replace(/^\/api/, '') + '?' + ctx.querystring;

    console.log(url);
    const options: RequestOptions2 = {
      // @ts-ignore
      method: this.ctx.method,
    };
    const res = await this.ctx.curl(url, options) ;
    ctx.body = res.data;
    ctx.status = res.status;
  }
}
