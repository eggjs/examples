'use strict';

const { Controller } = require('egg');

class TodoController extends Controller {
  // list todos, suport filter, `GET /api/todo?completed=true`
  async index() {
    const { ctx, service } = this;

    // query value is string, should convert types.
    let { completed } = ctx.query;
    if (ctx.query.completed !== undefined) completed = completed === 'true';

    ctx.status = 200;
    ctx.body = await service.todo.list({ completed });
  }

  async create() {
    const { ctx, service } = this;

    // params validate
    ctx.validate({ title: { type: 'string' } });

    ctx.status = 201;
    ctx.body = await service.todo.create(ctx.request.body);
  }

  async update() {
    const { ctx, service } = this;

    ctx.validate({ title: { type: 'string' } });

    ctx.status = 204;
    ctx.type = 'json';
    ctx.body = await service.todo.update(ctx.params.id, ctx.request.body);
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    ctx.status = 204;
    ctx.type = 'json';
    await service.todo.destroy(id);
  }
}

module.exports = TodoController;
