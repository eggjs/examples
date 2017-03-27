'use strict';

module.exports = app => {
  class TopicService extends app.Service {
    constructor(ctx) {
      super(ctx);
      this.root = 'https://cnodejs.org/api/v1';
    }

    * request(url, opts) {
      url = `${this.root}${url}`;
      opts = Object.assign({
        timeout: [ '30s', '30s' ],
        dataType: 'json',
      }, opts);
      return yield this.ctx.curl(url, opts);
    }

    * show(params) {
      const result = yield this.request(`/topic/${params.id}`, {
        data: {
          mdrender: params.mdrender,
          accesstoken: params.accesstoken,
        },
      });
      this.checkSuccess(result);

      return result.data.data;
    }

    * list(params) {
      const result = yield this.request('/topics', {
        data: params,
      });

      this.checkSuccess(result);
      return result.data.data;
    }

    * create(params) {
      const result = yield this.request('/topics', {
        method: 'post',
        data: params,
        contentType: 'json',
      });

      this.checkSuccess(result);
      return result.data.topic_id;
    }

    * update(params) {
      const result = yield this.request('/topics/update', {
        method: 'post',
        data: params,
        contentType: 'json',
      });

      this.checkSuccess(result);
    }

    checkSuccess(result) {
      if (result.status !== 200) {
        const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
        this.ctx.throw(result.status, errorMsg);
      }
      if (!result.data.success) {
        this.ctx.throw(500, 'remote response error', { data: result.data });
      }
    }
  }

  return TopicService;
};
