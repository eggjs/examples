'use strict';

module.exports = app => {
  return class NewsController extends app.Controller {
    async list() {
      const pageSize = this.app.config.news.pageSize;
      const page = parseInt(this.query.page) || 1;

      const idList = await this.service.hackerNews.getTopStories(page);
      // get itemInfo parallel
      const newsList = await idList.map(id => this.service.hackerNews.getItem(id));
      await this.render('news/list.tpl', { list: newsList, page, pageSize });
    }

    async detail() {
      const id = this.params.id;
      const newsInfo = await this.service.hackerNews.getItem(id);
      // get comment parallel
      const commentList = await newsInfo.kids.map(id => this.service.hackerNews.getItem(id));
      await this.render('news/detail.tpl', { item: newsInfo, comments: commentList });
    }

    async user() {
      const id = this.params.id;
      const userInfo = await this.service.hackerNews.getUser(id);
      await this.render('news/user.tpl', { user: userInfo });
    }
  };
};
