'use strict';

import { Service } from 'egg';
import { CreateOptions } from 'sequelize';

export default class Post extends Service {
  async list({ offset = 0, limit = 10, user_id = undefined }: { offset: number; limit: number; user_id?: number }) {
    return this.ctx.model.Post.findAndCountAll({
      offset,
      limit,
      attributes: [ 'id', 'title', 'user_id', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
      where: user_id ? { user_id } : undefined,
    });
  }

  async find(id: number) {
    const post = await this.ctx.model.Post.findByPk(id, {
      include: [{
        model: this.ctx.model.User,
        as: 'user',
        attributes: [ 'id', 'name', 'age' ],
      }],
    });
    if (!post) {
      this.ctx.throw(404, 'post not found');
    }
    return post;
  }

  async create(post: CreateOptions) {
    return this.ctx.model.Post.create(post);
  }

  async update({ id, user_id, updates }: { id: number; user_id: number; updates: object }) {
    const post = await this.ctx.model.Post.findByIdWithUser(id, user_id);
    if (!post) this.ctx.throw(404, 'post not found');
    return post!.update(updates);
  }

  async destroy({ id, user_id }: { id: number; user_id: number }) {
    const post = await this.ctx.model.Post.findByIdWithUser(id, user_id);
    if (!post) this.ctx.throw(404, 'post not found');
    return post!.destroy();
  }
}
