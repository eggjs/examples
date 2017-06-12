'use strict';

const assert = require('assert');
const mock = require('egg-mock');
describe('test/app/service/user.test.js', () => {
  let app;
  let ctx;
  before(function* () {
    app = mock.app();
    yield app.ready();
    ctx = app.mockContext();
    yield ctx.model.sync({ force: true });
  });
  describe('list()', () => {
    before(function* () {
      yield ctx.model.User.bulkCreate([
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
      ]);
    });
    after(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should list success with default limit 10 offset 0 order created_at', function* () {
      const data = yield ctx.service.user.list({});
      assert(data.count === 12);
      assert(data.rows.length === 10);
      assert(data.rows[0].id === 1);
      assert(data.rows[9].id === 10);
    });
    it('should return the giving offset rows', function* () {
      const data = yield ctx.service.user.list({ offset: 2 });
      assert(data.rows[0].id === 3);
      assert(data.rows[9].id === 12);
    });
    it('should return the giving limit rows', function* () {
      const data = yield ctx.service.user.list({ limit: 2 });
      assert(data.count === 12);
      assert(data.rows.length === 2);
    });
    it('should return order by the giving order name', function* () {
      const data = yield ctx.service.user.list({ order_by: 'age' });
      assert(data.rows[0].id === 12);
      assert(data.rows[1].id === 11);
    });
    it('should return order by the giving order_by name and the order direction', function* () {
      const data = yield ctx.service.user.list({ order_by: 'age', order: 'desc' });
      assert(data.rows[0].id === 1);
      assert(data.rows[1].id === 2);
    });
  });
  describe('find(id)', () => {
    before(function* () {
      yield ctx.model.User.bulkCreate([
        {
          id: 1,
          name: 'yuqi',
          age: 18,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        },
      ]);
    });
    after(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should find success', function* () {
      const user = yield ctx.service.user.find(1);
      assert(user.id === 1);
      assert(user.name === 'yuqi');
      assert(user.age === 18);
      assert(user.created_at.valueOf() === new Date('2017-06-05T06:38:16.498Z').valueOf());
      assert(user.updated_at.valueOf() === new Date('2017-06-05T06:38:16.498Z').valueOf());
    });
    it('should throw 404 error when id not exist', function* () {
      try {
        yield ctx.service.user.find(3);
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'user not found');
      }
    });
  });
  describe('create()', () => {
    afterEach(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should create success', function* () {
      const user = yield ctx.service.user.create({
        name: 'yuqi',
        age: 18,
      });
      assert(user.id === 1);
      assert(user.name === 'yuqi');
      assert(user.age === 18);
    });
  });
  describe('update()', () => {
    beforeEach(function* () {
      yield ctx.model.User.bulkCreate([
        {
          id: 1,
          name: 'yuqi',
          age: 18,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        },
      ]);
    });
    afterEach(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should update success', function* () {
      const user = yield ctx.service.user.update({
        id: 1,
        updates: {
          name: 'update',
          age: 19,
        },
      });
      assert(user.id === 1);
      assert(user.name === 'update');
      assert(user.age === 19);
    });
    it('should throw 404 when id not found', function* () {
      try {
        yield ctx.service.user.update({
          id: 2,
          updates: {
            name: 'update',
            age: 19,
          },
        });
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'user not found');
      }
    });
  });
  describe('del()', () => {
    beforeEach(function* () {
      yield ctx.model.User.bulkCreate([
        {
          id: 1,
          name: 'yuqi',
          age: 18,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        },
      ]);
    });
    afterEach(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should delete success', function* () {
      const result = yield ctx.service.user.del(1);
      assert(result);
    });
    it('should throw 404 when id not found', function* () {
      try {
        yield yield ctx.service.user.del(2);
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'user not found');
      }
    });
  });
});
