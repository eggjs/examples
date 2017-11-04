'use strict';

module.exports = app => {
  class NewsController extends app.Controller {
    async list() {
      const ctx = this.ctx;
      const pageSize = this.config.news.pageSize;
      const page = parseInt(ctx.query.page) || 1;

      const idList = await ctx.service.hackerNews.getTopStories(page);
      // get itemInfo parallel
      const newsList = await idList.map(id => ctx.service.hackerNews.getItem(id));
      await ctx.render('news/list.tpl', { list: newsList, page, pageSize });
    }

    async detail() {
      const ctx = this.ctx;
      const id = ctx.params.id;
      const newsInfo = await ctx.service.hackerNews.getItem(id);
      // get comment parallel
      const commentList = await (newsInfo.kids || []).map(id => ctx.service.hackerNews.getItem(id));
      await ctx.render('news/detail.tpl', { item: newsInfo, comments: commentList });
    }

    async user() {
      const ctx = this.ctx;
      const id = ctx.params.id;
      const userInfo = await ctx.service.hackerNews.getUser(id);
      await ctx.render('news/user.tpl', { user: userInfo });
    }
  }
  return NewsController;
};
