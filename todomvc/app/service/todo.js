'use strict';

const { Service } = require('egg');

const dataStore = [
  { id: '1', title: 'Read history of Node.js', completed: true },
  { id: '2', title: 'Learn Koa', completed: true },
  { id: '3', title: 'Star Egg', completed: false },
];

/**
 * @typedef Todo - Todo item
 * @property {String} id - todo id, will auto created
 * @property {String} title - todo content
 * @property {Boolean} completed - whether completed
 */

class TodoService extends Service {
  constructor(ctx) {
    super(ctx);
    this.store = dataStore;
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
    let list = this.store;
    if (completed !== undefined) {
      list = list.filter(x => x.completed === completed);
    }
    return list;
  }

  /**
   * get todo details, will throw is not found
   * @param {String} id - todo id
   */
  async get(id) {
    const index = id ? this.store.findIndex(x => x.id === id) : -1;
    if (index === -1) this.ctx.throw(500, `task#${id} not found`);
    return this.store[index];
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
    todo.id = Date.now().toString();
    todo.completed = false;

    this.store.push(todo);
    return todo;
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
    return Object.assign(data, todo);
  }

  /**
   * delete todo
   *
   * @param {String} id - todo id
   */
  async destroy(id) {
    const index = id ? this.store.findIndex(x => x.id === id) : -1;
    if (index === -1) this.ctx.throw(500, `task#${id} not found`);

    return this.store.splice(index, 1);
  }
}

module.exports = TodoService;
