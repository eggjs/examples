import { Controller } from 'egg';

export default class HomeController extends Controller {
  async render() {
    const ctx = this.ctx;
    ctx.body = 'Hello World';
  }
}
