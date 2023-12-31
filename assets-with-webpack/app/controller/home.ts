import { Controller } from 'egg';
import manifestMap from '../../config/manifest.json';

export default class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      Env: ctx.app.env,
      ManifestMap: manifestMap,
    });
  }

  async hello() {
    this.ctx.response.body = 'hi';
  }
}
