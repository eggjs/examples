'use strict';

const assert = require('assert');
const mock = require('egg-mock');
describe('test/app/service/post.test.js', () => {
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
        },
      ]);
      yield ctx.model.Post.bulkCreate([
        {
          id: 1,
          title: 'post01',
          content: 'the first post',
          user_id: 1,
          created_at: '2017-06-05T06:38:00.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 2,
          title: 'post02',
          content: 'the second post',
          user_id: 1,
          created_at: '2017-06-05T06:38:01.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 3,
          title: 'post03',
          content: 'the third post',
          user_id: 1,
          created_at: '2017-06-05T06:38:02.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 4,
          title: 'post04',
          content: 'the forth post',
          user_id: 1,
          created_at: '2017-06-05T06:38:03.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 5,
          title: 'post05',
          content: 'the 5th post',
          user_id: 1,
          created_at: '2017-06-05T06:39:04.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 6,
          title: 'post06',
          content: 'the 6th post',
          user_id: 1,
          created_at: '2017-06-05T06:39:05.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 7,
          title: 'post07',
          content: 'the 7th post',
          user_id: 1,
          created_at: '2017-06-05T06:39:06.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 8,
          title: 'post08',
          content: 'the 8th post',
          user_id: 1,
          created_at: '2017-06-05T06:39:07.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 9,
          title: 'post09',
          content: 'the 9th post',
          user_id: 2,
          created_at: '2017-06-05T06:39:08.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 10,
          title: 'post10',
          content: 'the 10th post',
          user_id: 1,
          created_at: '2017-06-05T06:39:09.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 11,
          title: 'post02',
          content: 'the 11th post',
          user_id: 2,
          created_at: '2017-06-05T06:39:10.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        },
      ]);
    });
    after(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should list success with default limit 10 offset 0 order created_at desc', function* () {
      const data = yield ctx.service.post.list({});
      assert(data.count === 11);
      assert(data.rows.length === 10);
      assert(data.rows[0].id === 11);
      assert(data.rows[9].id === 2);
    });
    it('should return the giving offset rows', function* () {
      const data = yield ctx.service.post.list({ offset: 10 });
      assert(data.count === 11);
      assert(data.rows.length === 1);
      assert(data.rows[0].id === 1);
    });
    it('should return the giving limit rows', function* () {
      const data = yield ctx.service.post.list({ limit: 2 });
      assert(data.count === 11);
      assert(data.rows.length === 2);
    });
    it('should return the posts of the giving user_id', function* () {
      const data = yield ctx.service.post.list({ user_id: 2 });
      assert(data.count === 2);
      assert(data.rows.length === 2);
      assert(data.rows[0].user_id === 2);
      assert(data.rows[1].user_id === 2);
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
      yield ctx.model.Post.bulkCreate([
        {
          id: 1,
          title: 'post01',
          content: 'the first post',
          user_id: 1,
          created_at: '2017-06-05T06:38:00.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        }, {
          id: 2,
          title: 'post02',
          content: 'the second post',
          user_id: 1,
          created_at: '2017-06-05T06:38:01.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        },
      ]);
    });
    after(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should find success', function* () {
      const post = yield ctx.service.post.find(1);
      assert(post.id === 1);
      assert(post.title === 'post01');
      assert(post.created_at.valueOf() === new Date('2017-06-05T06:38:00.498Z').valueOf());
      assert(post.updated_at.valueOf() === new Date('2017-06-05T06:38:16.498Z').valueOf());
    });
    it('should throw 404 error when id not exist', function* () {
      try {
        yield ctx.service.post.find(3);
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'post not found');
      }
    });
  });
  describe('create()', () => {
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
    it('should create success', function* () {
      const post = yield ctx.service.post.create({
        title: 'post01',
        content: 'the first post',
        user_id: 1,
      });
      assert(post.id === 1);
      assert(post.title === 'post01');
      assert(post.content === 'the first post');
    });
    it('should throw error when user_id not exist', function* () {
      try {
        yield ctx.service.post.create({
          title: 'post01',
          content: 'the first post',
          user_id: 2,
        });
      } catch (err) {
        assert(err.name === 'SequelizeForeignKeyConstraintError');
      }
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
      yield ctx.model.Post.bulkCreate([
        {
          id: 1,
          title: 'post01',
          content: 'the first post',
          user_id: 1,
          created_at: '2017-06-05T06:38:00.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        },
      ]);
    });
    afterEach(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should update success', function* () {
      const post = yield ctx.service.post.update({
        id: 1,
        user_id: 1,
        updates: {
          title: 'new title',
          content: 'new content',
        },
      });
      assert(post.id === 1);
      assert(post.title === 'new title');
      assert(post.content === 'new content');
    });
    it('should throw 403 when user_id not the author', function* () {
      try {
        yield ctx.service.post.update({
          id: 1,
          user_id: 2,
          updates: {
            title: 'new title',
            content: 'new content',
          },
        });
      } catch (error) {
        assert(error.status === 403);
        assert(error.message === 'not allowed to modify others post');
      }
    });
    it('should throw 404 when id not found', function* () {
      try {
        yield ctx.service.post.update({
          id: 2,
          user_id: 1,
          updates: {
            title: 'new title',
            content: 'new content',
          },
        });
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'post not found');
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
      yield ctx.model.Post.bulkCreate([
        {
          id: 1,
          title: 'post01',
          content: 'the first post',
          user_id: 1,
          created_at: '2017-06-05T06:38:00.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        },
      ]);
    });
    afterEach(function* () {
      yield ctx.model.sync({ force: true });
    });
    it('should delete success', function* () {
      const result = yield ctx.service.post.del(1);
      assert(result);
    });
    it('should throw 404 when id not found', function* () {
      try {
        yield yield ctx.service.post.del(2);
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'post not found');
      }
    });
  });
});
