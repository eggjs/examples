'use strict';

module.exports = app => {
  class TopicService extends app.Service {
    constructor(ctx) {
      super(ctx);
      this.root = 'https://cnodejs.org/api/v1';
    }

    * show(params) {
      const result = yield this.ctx.curl(`${this.root}/topic/${params.id}`, {
        data: {
          mdrender: params.mdrender,
          accesstoken: params.accesstoken,
        },
        dataType: 'json',
        timeout: '30s',
      });
      this.checkSuccess(result);

      return result.data.data;
    }

    * list(params) {
      const result = yield this.ctx.curl(`${this.root}/topics`, {
        data: params,
        dataType: 'json',
        timeout: '30s',
      });

      this.checkSuccess(result);
      return result.data.data;
    }

    * create(params) {
      const result = yield this.ctx.curl(`${this.root}/topics`, {
        method: 'post',
        data: params,
        dataType: 'json',
        contentType: 'json',
        timeout: '30s',
      });

      this.checkSuccess(result);
      return result.data.topic_id;
    }

    * update(params) {
      const result = yield this.ctx.curl(`${this.root}/topics/update`, {
        method: 'post',
        data: params,
        dataType: 'json',
        contentType: 'json',
        timeout: '30s',
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
