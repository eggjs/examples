import { Context, Service } from 'egg';

declare module 'egg' {
  export interface IService {
    hackerNews: HackerNews;
  }
}

/**
 * HackerNews Api Service
 */
export default class HackerNews extends Service {
  private config: any;
  private serverUrl: string;
  private pageSize: number;
  constructor(ctx: Context) {
    super(ctx);
    this.config = this.ctx.app.config.news;
    this.serverUrl = this.config.serverUrl;
    this.pageSize = this.config.pageSize;
  }

  /**
   * request hacker-news api
   * @param {String} api - Api name
   * @param {Object} [opts] - urllib options
   * @return {Promise} response.data
   */
  public async request(api, opts?) {
    const options = Object.assign({
      dataType: 'json',
      timeout: ['30s', '30s'],
    }, opts);

    const result = await this.ctx.curl(`${this.serverUrl}/${api}`, options);
    return result.data;
  }

  /**
   * get top story ids
   * @param {Number?} [page] - page number, 1-base
   * @param {Number?} [pageSize] - page count
   * @return {Promise} id list
   */
  public async getTopStories(page?: number, pageSize?: number) {
    page = page || 1;
    pageSize = pageSize || this.pageSize;

    const result = await this.request('topstories.json', {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`,
      },
    });
    return Object.keys(result).map(key => result[key]);
  }

  /**
   * query item
   * @param {Number} id - itemId
   * @return {Promise} item info
   */
  public async getItem(id) {
    return await this.request(`item/${id}.json`);
  }

  /**
   * get user info
   * @param {Number} id - userId
   * @return {Promise} user info
   */
  public async getUser(id) {
    return await this.request(`user/${id}.json`);
  }
}
