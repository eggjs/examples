import { Controller } from 'egg';
import { inject } from 'egg-di';
import { HackerNews } from '../service/HackerNews';

export default class NewsController extends Controller {
  @inject()
  private readonly hackerNews: HackerNews;

  public async list() {
    const { ctx, app } = this;
    const pageSize = app.config.news.pageSize;
    const page = parseInt(ctx.query.page, 10) || 1;

    const idList = await this.hackerNews.getTopStories(page);

    // get itemInfo parallel
    const newsList = await Promise.all(idList.map((id) => this.hackerNews.getItem(id)));
    await ctx.render('news/list.tpl', { list: newsList, page, pageSize });
  }

  public async detail() {
    const { ctx } = this;
    const id = ctx.params.id;
    const newsInfo = await this.hackerNews.getItem(id);
    // get comment parallel
    const commentList = await Promise.all(newsInfo.kids.map((_id) => this.hackerNews.getItem(_id)));
    await ctx.render('news/detail.tpl', { item: newsInfo, comments: commentList });
  }

  public async user() {
    const { ctx } = this;
    const id = ctx.params.id;
    const userInfo = await this.hackerNews.getUser(id);
    await ctx.render('news/user.tpl', { user: userInfo });
  }
}
