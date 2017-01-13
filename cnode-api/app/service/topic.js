'use strict';

module.exports = app => {
  class TopicService extends app.Service {
    constructor(ctx) {
      super(ctx);
      this.root = 'https://cnodejs.org/api/v1/topics';
    }

    * show(params) {
      const result = yield this.ctx.curl(`${this.root}/${params.id}`, {
        data: {
          mdrender: params.mdrender,
          accesstoken: params.accesstoken,
        },
        dataType: 'json',
      });
      this.checkSuccess(result);

      return result.data.data;
    }

    * list(params) {
      const result = yield this.ctx.curl(this.root, {
        data: params,
        dataType: 'json',
      });

      this.checkSuccess(result);
      return result.data.data;
    }

    * create(params) {
      const result = yield this.ctx.curl(this.root, {
        method: 'post',
        data: params,
        dataType: 'json',
        contentType: 'json',
      });

      this.checkSuccess(result);
      return result.data.topic_id;
    }

    * update(params) {
      const result = yield this.ctx.curl(`${this.root}/${params.id}`, {
        method: 'post',
        data: params,
        dataType: 'json',
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
