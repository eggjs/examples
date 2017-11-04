'use strict';

const mock = require('egg-mock');

describe('test/app/controller/post.test.js', () => {
  let app;
  let ctx;
  before(async function() {
    app = mock.app();
    await app.ready();
    ctx = app.mockContext();
    await ctx.model.sync({ force: true });
  });
  describe('posts()', () => {
    before(async function() {
      /* eslint-disable no-unused-vars */
      app.mockService('post', 'list', async function({ offset = 0, limit = 10 }) {
        return Promise.resolve({
          count: 2,
          rows: [{
            id: 1,
            title: 'post01',
            user_id: 1,
            created_at: '2017-06-05T06:38:00.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }, {
            id: 2,
            title: 'post02',
            user_id: 1,
            created_at: '2017-06-05T06:38:01.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
          }],
        });
      });
      ctx = app.mockContext();
    });
    after(function() {
      mock.restore();
    });
    it('should success', async function() {
      await app.httpRequest()
        .get('/posts?offset=0&limit=2')
        .expect(200)
        .expect({
          count: 2,
          rows: [
            {
              id: 1,
              title: 'post01',
              user_id: 1,
              created_at: '2017-06-05T06:38:00.498Z',
              updated_at: '2017-06-05T06:38:16.498Z',
            }, {
              id: 2,
              title: 'post02',
              user_id: 1,
              created_at: '2017-06-05T06:38:01.498Z',
              updated_at: '2017-06-05T06:38:16.498Z',
            },
          ],
        });
    });
  });
  describe('find(id)', () => {
    before(async function() {
      app.mockService('post', 'find', async function(id) {
        /* eslint eqeqeq: "off" */
        if (id == 1) {
          return Promise.resolve({
            id: 1,
            title: 'post01',
            user_id: 1,
            content: 'the first post',
            created_at: '2017-06-05T06:38:00.498Z',
            updated_at: '2017-06-05T06:38:16.498Z',
            user: {
              id: 1,
              name: 'yuqi',
              age: 18,
            },
          });
        }
        const error = new Error('post not found');
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
        .get('/posts/1')
        .expect(200)
        .expect({
          id: 1,
          title: 'post01',
          user_id: 1,
          content: 'the first post',
          created_at: '2017-06-05T06:38:00.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
          user: {
            id: 1,
            name: 'yuqi',
            age: 18,
          },
        });
    });
    it('should throw 404 error when id not exist', async function() {
      await app.httpRequest()
        .get('/posts/2')
        .expect(404);
    });
  });
  describe('create()', () => {
    before(async function() {
      app.mockService('post', 'create', async function(post) {
        post.id = 1;
        post.created_at = '2017-06-05T06:38:16.498Z';
        post.updated_at = '2017-06-05T06:38:16.498Z';
        return Promise.resolve(post);
      });
      ctx = app.mockContext();
    });
    after(function() {
      mock.restore();
    });
    it('should success', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .post('/users/1/posts')
        .send({
          title: 'post',
          content: 'create post',
        })
        .expect(201)
        .expect({
          id: 1,
          title: 'post',
          content: 'create post',
          user_id: 1,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-05T06:38:16.498Z',
        });
    });
  });
  describe('update()', () => {
    before(async function() {
      app.mockService('post', 'update', async function({ id, user_id, updates }) {
        /* eslint eqeqeq: "off" */
        if (id == 1) {
          return Promise.resolve({
            id: 1,
            title: updates.title || 'origin title',
            content: updates.content || 'origin content',
            user_id: 1,
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
        .put('/users/1/posts/1')
        .send({
          title: 'new title',
          content: 'new content',
        })
        .expect(200)
        .expect({
          id: 1,
          title: 'new title',
          content: 'new content',
          user_id: 1,
          created_at: '2017-06-05T06:38:16.498Z',
          updated_at: '2017-06-07T06:38:16.498Z',
        });
    });
    it('should throw 404 error when id not exist', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .put('/users/1/posts/2')
        .send({
          title: 'new title',
          content: 'new content',
        })
        .expect(404);
    });
  });
  describe('del()', () => {
    before(async function() {
      app.mockService('post', 'del', async function(id) {
        /* eslint eqeqeq: "off" */
        if (id == 1) {
          return Promise.resolve(true);
        }
        const error = new Error('post not found');
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
        .del('/users/1/posts/1')
        .expect(200);
    });
    it('should throw 404 error when id not exist', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .del('/users/1/posts/2')
        .expect(404);
    });
  });
});
