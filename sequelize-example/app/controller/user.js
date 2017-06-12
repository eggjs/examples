'use strict';

module.exports = app => {
  return class UserController extends app.Controller {
    * users() {
      this.ctx.body = yield this.service.user.list(this.ctx.query);
    }

    * user() {
      this.ctx.body = yield this.service.user.find(this.ctx.params.id);
    }

    * create() {
      const created = yield this.service.user.create(this.ctx.request.body);
      this.ctx.status = 201;
      this.ctx.body = created;
    }

    * update() {
      const id = this.ctx.params.id;
      const body = this.ctx.request.body;
      this.ctx.body = yield this.service.user.update({ id, updates: body });
    }

    * del() {
      const id = this.ctx.params.id;
      yield this.service.user.del(id);
      this.ctx.status = 200;
    }
  };
};
