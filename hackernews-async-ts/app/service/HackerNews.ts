import { Context, Service } from 'egg';

declare module 'egg' {
  export interface Services {
    hackerNews: HackerNews;
  }
}

/**
 * HackerNews Api Service
 */
export default class HackerNews extends Service {
  public config: any;
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
   * @param api - Api name
   * @param opts - urllib options
   */
  public async request(api: string, opts?: object) {
    const options = Object.assign({
      dataType: 'json',
      timeout: ['30s', '30s'],
    }, opts);

    const result = await this.ctx.curl(`${this.serverUrl}/${api}`, options);
    return result.data;
  }

  /**
   * get top story ids
   * @param page - page number, 1-ase
   * @param pageSize - page count
   */
  public async getTopStories(page?: number, pageSize?: number) {
    page = page || 1;
    pageSize = pageSize || this.pageSize;

    try {
      const result = await this.request('topstories.json', {
        data: {
          orderBy: '"$key"',
          startAt: `"${pageSize * (page - 1)}"`,
          endAt: `"${pageSize * page - 1}"`,
        },
      });
      return Object.keys(result).map((key) => result[key]);
    } catch (e) {
      this.ctx.logger.error(e);
      return [];
    }
  }

  /**
   * query item
   * @param id - itemId
   */
  public async getItem(id: number) {
    return await this.request(`item/${id}.json`);
  }

  /**
   * get user info
   * @param id - userId
   */
  public async getUser(id: number) {
    return await this.request(`user/${id}.json`);
  }
}
