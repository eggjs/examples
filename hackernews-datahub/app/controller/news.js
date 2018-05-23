'use strict';

const fetch = require('node-fetch');
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const { ctx, app } = this;
    const resPromise = await fetch(app.config.news.getTopStories);
    const res = await resPromise.json();
    await ctx.render('news/list.tpl', res);
  }
}

module.exports = NewsController;

