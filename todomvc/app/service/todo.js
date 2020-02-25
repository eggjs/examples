'use strict';

const { Service } = require('egg');

/**
 * @typedef Todo - Todo item
 * @property {String} id - todo id, will auto created
 * @property {String} title - todo content
 * @property {Boolean} completed - whether completed
 */

class TodoService extends Service {
  constructor(ctx) {
    super(ctx);
    this.Todo = ctx.model.Todo;
  }

  /**
   * list all todos
   *
   * @param {Object} [filters] - filters
   * @param {Boolean} [filters.completed] - filter `completed`
   * @return {Array<Todo>} query result
   */
  async list(filters) {
    const { completed } = filters;
    const where = {};
    if (completed !== undefined) {
      where.completed = completed ? 1 : 0;
    }
    const list = await this.Todo.findAll({ where });
    return list;
  }

  /**
   * get todo details, will throw is not found
   * @param {String} id - todo id
   */
  async get(id) {
    const item = await this.Todo.findByPk(id);
    if (!item) this.ctx.throw(500, `task#${id} not found`);
    return item;
  }

  /**
   * create todo
   *
   * @param {Todo} todo - todo info without `id`, but `title` required
   */
  async create(todo) {
    // validate
    if (!todo.title) this.ctx.throw(422, 'task title required');
    // normalize
    todo.completed = false;
    const item = await this.Todo.create(todo);
    return item;
  }

  /**
   * update todo info
   *
   * @param {String} id - todo id
   * @param {Todo} todo - data to updated
   */
  async update(id, todo) {
    const data = await this.get(id);
    if (!todo.title) this.ctx.throw(442, 'task title required');
    await data.update(todo);
    return data;
  }

  /**
   * delete todo
   *
   * @param {String} id - todo id
   */
  async destroy(id) {
    const item = await this.get(id);
    await item.destroy();
    return item;
  }
}

module.exports = TodoService;
