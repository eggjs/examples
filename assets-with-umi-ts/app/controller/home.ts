import { Controller } from 'egg';
import { HttpMethod, RequestOptions2 } from 'urllib';

export default class HomeController extends Controller {
  public async index() {
    await this.ctx.render('index.html');
  }

  public async api() {
    const ctx = this.ctx;

    const url = 'https://h5.ele.me' + ctx.path.replace(/^\/api/, '') + '?' + ctx.querystring;

    console.log(url);
    // tslint:disable-next-line:no-multi-spaces
    const options: RequestOptions2 =  {
      method: this.ctx.method as HttpMethod,
    };
    const res = await this.ctx.curl(url, options) ;
    ctx.body = res.data;
    ctx.status = res.status;
  }
}
