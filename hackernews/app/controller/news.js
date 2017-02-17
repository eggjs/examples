'use strict';

module.exports = app => {
  class NewsController extends app.Controller {
    * list() {
      const ctx = this.ctx;
      const pageSize = this.config.news.pageSize;
      const page = parseInt(ctx.query.page) || 1;

      const idList = yield ctx.service.hackerNews.getTopStories(page);
      // get itemInfo parallel
      const newsList = yield idList.map(id => ctx.service.hackerNews.getItem(id));
      yield ctx.render('news/list.tpl', { list: newsList, page, pageSize });
    }

    * detail() {
      const ctx = this.ctx;
      const id = ctx.params.id;
      const newsInfo = yield ctx.service.hackerNews.getItem(id);
      // get comment parallel
      const commentList = yield (newsInfo.kids || []).map(id => ctx.service.hackerNews.getItem(id));
      yield ctx.render('news/detail.tpl', { item: newsInfo, comments: commentList });
    }

    * user() {
      const ctx = this.ctx;
      const id = ctx.params.id;
      const userInfo = yield ctx.service.hackerNews.getUser(id);
      yield ctx.render('news/user.tpl', { user: userInfo });
    }
  }
  return NewsController;
};
