'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/service/post.test.js', () => {
  let ctx;
  beforeEach(() => {
    ctx = app.mockContext();
  });

  describe('list()', () => {
    it('should list success with default limit 10 offset 0 order created_at desc', async () => {
      await app.factory.createMany('post', 11);
      const data = await ctx.service.post.list({});
      assert(data.count === 11);
      assert(data.rows.length === 10);
      assert(data.rows[0].id === 11);
      assert(data.rows[9].id === 2);
    });
    it('should return the giving offset rows', async () => {
      await app.factory.createMany('post', 10);
      const data = await ctx.service.post.list({ offset: 5 });
      assert(data.count === 10);
      assert(data.rows.length === 5);
      // assert(data.rows[0].id === 1);
    });
    it('should return the giving limit rows', async () => {
      await app.factory.createMany('post', 3);
      const data = await ctx.service.post.list({ limit: 2 });
      assert(data.count === 3);
      assert(data.rows.length === 2);
    });
    it('should return the posts of the giving user_id', async () => {
      await app.factory.createMany('post', 10);
      await app.factory.createMany('post', 2, { user_id: 1000 });
      const data = await ctx.service.post.list({ user_id: 1000 });
      assert(data.count === 2);
      assert(data.rows.length === 2);
      assert(data.rows[0].user_id === 1000);
      assert(data.rows[1].user_id === 1000);
    });
  });

  describe('find(id)', () => {
    it('should find success', async () => {
      const post = await app.factory.create('post');
      const res = await ctx.service.post.find(post.id);
      assert(res.id === post.id);
      assert(res.title === post.title);
    });
    it('should throw 404 error when id not exist', async () => {
      try {
        await ctx.service.post.find(3);
        throw new Error('should not execute');
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'post not found');
      }
    });
  });

  describe('create()', () => {
    beforeEach(async () => {
      await ctx.model.User.bulkCreate([
        {
          id: 1,
          name: 'yuqi',
          age: 18,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        },
      ]);
    });

    it('should create success', async () => {
      const post = await ctx.service.post.create({
        title: 'post01',
        content: 'the first post',
        user_id: 1,
      });
      assert(post.id === 1);
      assert(post.title === 'post01');
      assert(post.content === 'the first post');
    });
  });

  describe('update()', () => {
    it('should update success', async () => {
      const post = await app.factory.create('post');
      const updated = await ctx.service.post.update({
        id: post.id,
        user_id: post.user_id,
        updates: {
          title: 'new title',
          content: 'new content',
        },
      });
      assert(updated.title === 'new title');
      assert(updated.content === 'new content');
    });

    it('should throw 404 when user_id not the author', async () => {
      const post = await app.factory.create('post');
      try {
        await ctx.service.post.update({
          id: post.id,
          user_id: 10000,
          updates: {
            title: 'new title',
            content: 'new content',
          },
        });
        throw new Error('should not execute');
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'post not found');
      }
    });

    it('should throw 404 when id not found', async () => {
      try {
        await ctx.service.post.update({
          id: 1000,
          user_id: 1,
          updates: {
            title: 'new title',
            content: 'new content',
          },
        });
        throw new Error('should not execute');
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'post not found');
      }
    });
  });

  describe('destroy()', () => {
    it('should delete success', async () => {
      const post = await app.factory.create('post');
      const result = await ctx.service.post.destroy({ id: post.id, user_id: post.user_id });
      assert(result);
    });

    it('should throw 404 when id not found', async () => {
      try {
        await ctx.service.post.destroy({ id: 1 });
        throw new Error('should not execute');
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'post not found');
      }
    });

    it('should throw 404 when user_id not match', async function() {
      const post = await app.factory.create('post');
      try {
        await await ctx.service.post.destroy({ id: post.id, user_id: 1000 });
        throw new Error('should not execute');
      } catch (error) {
        assert(error.status === 404);
        assert(error.message === 'post not found');
      }
    });
  });
});
