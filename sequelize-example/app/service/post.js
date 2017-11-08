'use strict';

const Service = require('egg').Service;

class Post extends Service {
  async list({ offset = 0, limit = 10, user_id }) {
    const options = {
      offset,
      limit,
      attributes: [ 'id', 'title', 'user_id', 'created_at', 'updated_at' ],
      order: [[ 'created_at', 'desc' ]],
    };
    if (user_id) {
      options.where = {
        user_id,
      };
    }
    return this.ctx.model.Post.findAndCountAll(options);
  }

  async find(id) {
    const post = await this.ctx.model.Post.findById(id, {
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
    const post = await this.ctx.model.Post.findById(id);
    if (!post) {
      this.ctx.throw(404, 'post not found');
    }
    if (post.user_id !== user_id) {
      this.ctx.throw(403, 'not allowed to modify others post');
    }
    return post.update(updates);
  }

  async del(id) {
    const post = await this.ctx.model.Post.findById(id);
    if (!post) {
      this.ctx.throw(404, 'post not found');
    }
    return post.destroy();
  }
}

module.exports = Post;
