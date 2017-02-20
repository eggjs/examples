'use strict';

module.exports = app => {
  /**
   * HackerNews Api Service
   */
  class HackerNews extends app.Service {
    constructor(ctx) {
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
    * request(api, opts) {
      const options = Object.assign({
        dataType: 'json',
        timeout: [ '30s', '30s' ],
      }, opts);

      const result = yield this.ctx.curl(`${this.serverUrl}/${api}`, options);
      return result.data;
    }

    /**
     * get top story ids
     * @param {Number} [page] - page number, 1-base
     * @param {Number} [pageSize] - page count
     * @return {Promise} id list
     */
    * getTopStories(page, pageSize) {
      page = page || 1;
      pageSize = pageSize || this.pageSize;

      const result = yield this.request('topstories.json', {
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
    * getItem(id) {
      return yield this.request(`item/${id}.json`);
    }

    /**
     * get user info
     * @param {Number} id - userId
     * @return {Promise} user info
     */
    * getUser(id) {
      return yield this.request(`user/${id}.json`);
    }
  }

  return HackerNews;
};
