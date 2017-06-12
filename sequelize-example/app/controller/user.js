'use strict';

module.exports = app => {
  return class UserController extends app.Controller {
    * users(ctx) {
      ctx.body = yield ctx.service.user.list(ctx.query);
    }

    * user(ctx) {
      ctx.body = yield ctx.service.user.find(ctx.params.id);
    }

    * create(ctx) {
      const created = yield ctx.service.user.create(ctx.request.body);
      ctx.status = 201;
      ctx.body = created;
    }

    * update(ctx) {
      const id = ctx.params.id;
      const body = ctx.request.body;
      ctx.body = yield ctx.service.user.update({ id, updates: body });
    }

    * del(ctx) {
      const id = ctx.params.id;
      yield ctx.service.user.del(id);
      ctx.status = 200;
    }
  };
};
