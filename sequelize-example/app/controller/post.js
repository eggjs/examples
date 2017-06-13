'use strict';

module.exports = app => {
  return class UserController extends app.Controller {
    * posts() {
      const ctx = this.ctx;
      ctx.body = yield ctx.service.post.list(ctx.query);
    }

    * post() {
      const ctx = this.ctx;
      ctx.body = yield ctx.service.post.find(ctx.params.id);
    }

    * create() {
      const ctx = this.ctx;
      const body = ctx.request.body;
      body.user_id = +ctx.params.user_id;
      const created = yield ctx.service.post.create(ctx.request.body);
      ctx.status = 201;
      ctx.body = created;
    }

    * update() {
      const ctx = this.ctx;
      const id = ctx.params.id;
      const user_id = +ctx.params.user_id;
      const body = ctx.request.body;
      ctx.body = yield ctx.service.post.update({ id, user_id, updates: body });
    }

    * del() {
      const ctx = this.ctx;
      const id = ctx.params.id;
      yield ctx.service.post.del(id);
      ctx.status = 200;
    }
  };
};
