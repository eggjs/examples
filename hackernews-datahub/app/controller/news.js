'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const { ctx, app } = this;
    const pageSize = app.config.news.pageSize;
    const page = parseInt(ctx.query.page) || 1;

    const idList = await ctx.service.hackerNews.getTopStories(page);
    await ctx.render('news/list.tpl', {
      list: idList[0],
      page, pageSize,
    });
  }
}

module.exports = NewsController;

