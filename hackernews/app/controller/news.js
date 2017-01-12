'use strict';

exports.list = function* newsListController() {
  const pageSize = this.app.config.news.pageSize;
  const page = parseInt(this.query.page) || 1;

  const idList = yield this.service.hackerNews.getTopStories(page);
  // get itemInfo parallel
  const newsList = yield idList.map(id => this.service.hackerNews.getItem(id));
  yield this.render('news/list.tpl', { list: newsList, page, pageSize });
};

exports.detail = function* newsDetailController() {
  const id = this.params.id;
  const newsInfo = yield this.service.hackerNews.getItem(id);
  // get comment parallel
  const commentList = yield newsInfo.kids.map(id => this.service.hackerNews.getItem(id));
  yield this.render('news/detail.tpl', { item: newsInfo, comments: commentList });
};

exports.user = function* userInfoController() {
  const id = this.params.id;
  const userInfo = yield this.service.hackerNews.getUser(id);
  yield this.render('news/user.tpl', { user: userInfo });
};
