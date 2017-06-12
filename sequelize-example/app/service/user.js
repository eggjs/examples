'use strict';

module.exports = app => {
  return class User extends app.Service {
    * list({ offset = 0, limit = 10, order_by = 'created_at', order = 'ASC' }) {
      return yield this.ctx.model.User.findAndCountAll({
        offset,
        limit,
        order: [[ order_by, order.toUpperCase() ]],
      });
    }

    * find(id) {
      const user = yield this.ctx.model.User.findById(id);
      if (!user) {
        this.ctx.throw(404, 'user not found');
      }
      return user;
    }

    * create(user) {
      return yield this.ctx.model.User.create(user);
    }

    * update({ id, updates }) {
      const user = yield this.ctx.model.User.findById(id);
      if (!user) {
        this.ctx.throw(404, 'user not found');
      }
      return yield user.update(updates);
    }

    * del(id) {
      const user = yield this.ctx.model.User.findById(id);
      if (!user) {
        this.ctx.throw(404, 'user not found');
      }
      return user.destroy();
    }
  };
};
