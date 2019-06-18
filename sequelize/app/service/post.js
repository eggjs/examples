'use strict';

const Service = require('egg').Service;

class Post extends Service {
  async list({ offset = 0, limit = 10, user_id }) {
    const options = {
      offset,
      limit,
      attributes: [ 'id', 'title', 'user_id', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    };
    if (user_id) {
      options.where = {
        user_id,
      };
    }
    return this.ctx.model.Post.findAndCountAll(options);
  }

  async find(id) {
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

  async create(post) {
    return this.ctx.model.Post.create(post);
  }

  async update({ id, user_id, updates }) {
    const post = await this.ctx.model.Post.findByIdWithUser(id, user_id);
    if (!post) this.ctx.throw(404, 'post not found');
    return post.update(updates);
  }

  async destroy({ id, user_id }) {
    const post = await this.ctx.model.Post.findByIdWithUser(id, user_id);
    if (!post) this.ctx.throw(404, 'post not found');
    return post.destroy();
  }
}

module.exports = Post;
