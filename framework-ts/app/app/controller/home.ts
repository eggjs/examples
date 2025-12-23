import { Controller, Service } from 'yadan-ts'

export default class HomeController extends Controller {
  async render() {
    const { ctx } = this

    // use service defined in framework
    const data = await ctx.service.test.get(123);
    await ctx.render('home.tpl', data);
  }
}

declare module 'egg' {
  export interface IController {
      home: HomeController;
  }
}

// @FIXME
declare module 'egg' {
  export interface IService {
    test: any
  }
}
