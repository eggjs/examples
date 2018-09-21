'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/service/post.test.js', () => {
  describe('GET /posts', () => {
    it('should work', async () => {
      await app.factory.createMany('post', 3);
      const res = await app.httpRequest().get('/posts?limit=2');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 2);
      assert(res.body.rows[0].title);
      assert(!res.body.rows[0].content);
    });
  });

  describe('GET /posts/:id', () => {
    it('should work', async () => {
      const post = await app.factory.create('post');
      const res = await app.httpRequest().get(`/posts/${post.id}`);
      assert(res.status === 200);
      assert(res.body.title === post.title);
      assert(res.body.content === post.content);
    });
  });

  describe('POST /posts', () => {
    it('should work', async () => {
      app.mockCsrf();
      let res = await app.httpRequest().post('/posts')
        .send({
          title: 'title',
          content: 'content',
          user_id: 1,
        });
      assert(res.status === 201);
      assert(res.body.id);

      res = await app.httpRequest().get(`/posts/${res.body.id}`);
      assert(res.status === 200);
      assert(res.body.title === 'title');
    });
  });

  describe('DELETE /posts/:id', () => {
    it('should work', async () => {
      const post = await app.factory.create('post');

      app.mockCsrf();
      const res = await app.httpRequest().delete(`/posts/${post.id}`)
        .send({ user_id: post.user_id });
      assert(res.status === 200);
    });
  });
});
