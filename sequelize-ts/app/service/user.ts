'use strict';

import { Service } from 'egg';
import { CreateOptions } from 'sequelize';

class User extends Service {
  async list({ offset = 0, limit = 10 }: { offset: number; limit: number; }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async find(id: number) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user!;
  }

  async create(user: CreateOptions) {
    return this.ctx.model.User.create(user);
  }

  async update({ id, updates }: { id: number; updates: object }) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user!.update(updates);
  }

  async del(id: number) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user!.destroy();
  }
}

module.exports = User;
