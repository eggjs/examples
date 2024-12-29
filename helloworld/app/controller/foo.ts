import { Controller } from 'egg';

export default class FooController extends Controller {
  async render() {
    const ctx = this.ctx;
    ctx.status = 400;
    ctx.body = {
      foo: 'bar',
    };
  }
}
