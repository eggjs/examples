'use strict';

const mock = require('egg-mock');
const _ = require('lodash');

describe('test/app/controller/user.test.js', () => {
  let app;
  let ctx;
  before(async function() {
    app = mock.app();
    await app.ready();
    ctx = app.mockContext();
    await ctx.model.sync({ force: true });
  });
  describe('users()', () => {
    before(async function() {
      app.mockService('user', 'list', async function({ offset = 0, limit = 10, order_by = 'created_at', order = 'ASC' }) {
        const users = [
          {
            id: 1,
            name: 'yuqi01',
            age: 18,
            created_at: '2017-06-05T06:38:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 2,
            name: 'yuqi02',
            age: 17,
            created_at: '2017-06-05T06:39:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 3,
            name: 'yuqi03',
            age: 16,
            created_at: '2017-06-05T06:40:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 4,
            name: 'yuqi04',
            age: 15,
            created_at: '2017-06-05T06:41:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 5,
            name: 'yuqi05',
            age: 14,
            created_at: '2017-06-05T06:42:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 6,
            name: 'yuqi06',
            age: 13,
            created_at: '2017-06-05T06:43:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 7,
            name: 'yuqi07',
            age: 12,
            created_at: '2017-06-05T06:44:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 8,
            name: 'yuqi08',
            age: 11,
            created_at: '2017-06-05T06:45:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 9,
            name: 'yuqi09',
            age: 10,
            created_at: '2017-06-05T06:46:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 10,
            name: 'yuqi10',
            age: 9,
            created_at: '2017-06-05T06:47:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 11,
            name: 'yuqi11',
            age: 8,
            created_at: '2017-06-05T06:48:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 12,
            name: 'yuqi12',
            age: 7,
            created_at: '2017-06-05T06:49:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          },
        ];
        let result = _.sortBy(users, o => o[ order_by ]);
        if (order === 'DESC') {
          result = _.reverse(result);
        }
        result = _.slice(result, offset);
        result = _.take(result, limit);
        return Promise.resolve({
          count: users.length,
          rows: result,
        });
      });
      ctx = app.mockContext();
    });
    after(function() {
      mock.restore();
    });
    it('should success', async function() {
      await app.httpRequest()
        .get('/users?offset=2&limit=2')
        .expect(200)
        .expect({
          count: 12,
          rows: [
            {
              id: 3,
              name: 'yuqi03',
              age: 16,
              created_at: '2017-06-05T06:40:16.498Z',
              updated_at: '2017-06-05T06:38:16.498Z',
            }, {
              id: 4,
              name: 'yuqi04',
              age: 15,
              created_at: '2017-06-05T06:41:16.498Z',
              updated_at: '2017-06-05T06:38:16.498Z',
            },
          ],
        });
    });
  });
  describe('find(id)', () => {
    before(async function() {
      app.mockService('user', 'find', async function(id) {
        /* eslint eqeqeq: "off" */
        if (id == 1) {
          return Promise.resolve({
            id: 1,
            name: 'yuqi01',
            age: 18,
            created_at: '2017-06-05T06:38:16.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          });
        }
        const error = new Error('user not found');
        error.status = 404;
        throw error;
      });
      ctx = app.mockContext();
    });
    after(function() {
      mock.restore();
    });
    it('should success', async function() {
      await app.httpRequest()
        .get('/users/1')
        .expect(200)
        .expect({
          id: 1,
          name: 'yuqi01',
          age: 18,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        });
    });
    it('should throw 404 error when id not exist', async function() {
      await app.httpRequest()
        .get('/users/2')
        .expect(404);
    });
  });
  describe('create()', () => {
    before(async function() {
      app.mockService('user', 'create', async function(user) {
        user.id = 1;
        user.created_at = '2017-06-05T06:38:16.498Z';
        user.updated_at = '2017-06-05T06:38:16.498Z';
        return Promise.resolve(user);
      });
      ctx = app.mockContext();
    });
    after(function() {
      mock.restore();
    });
    it('should success', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .post('/users')
        .send({
          name: 'yuqi',
          age: 18,
        })
        .expect(201)
        .expect({
          id: 1,
          name: 'yuqi',
          age: 18,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        });
    });
  });
  describe('update()', () => {
    before(async function() {
      app.mockService('user', 'update', async function({ id, updates }) {
        /* eslint eqeqeq: "off" */
        if (id == 1) {
          return Promise.resolve({
            id: 1,
            name: updates.name || 'yuqi',
            age: updates.age || 18,
            created_at: '2017-06-05T06:38:16.498Z',
            updated_at: '2017-06-07T06:38:16.498Z',
          });
        }
        const error = new Error('user not found');
        error.status = 404;
        throw error;
      });
      ctx = app.mockContext();
    });
    after(function() {
      mock.restore();
    });
    it('should success', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .put('/users/1')
        .send({
          name: 'update',
          age: 19,
        })
        .expect(200)
        .expect({
          id: 1,
          name: 'update',
          age: 19,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-07T06:38:16.498Z',
        });
    });
    it('should throw 404 error when id not exist', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .put('/users/2')
        .send({
          name: 'update',
          age: 19,
        })
        .expect(404);
    });
  });
  describe('del()', () => {
    before(async function() {
      app.mockService('user', 'del', async function(id) {
        /* eslint eqeqeq: "off" */
        if (id == 1) {
          return Promise.resolve(true);
        }
        const error = new Error('user not found');
        error.status = 404;
        throw error;
      });
      ctx = app.mockContext();
    });
    after(function() {
      mock.restore();
    });
    it('should success', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .del('/users/1')
        .expect(200);
    });
    it('should throw 404 error when id not exist', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .del('/users/2')
        .expect(404);
    });
  });
});
