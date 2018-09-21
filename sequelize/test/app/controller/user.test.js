'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/service/user.test.js', () => {
  describe('GET /users', () => {
    it('should work', async () => {
      await app.factory.createMany('user', 3);
      const res = await app.httpRequest().get('/users?limit=2');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 2);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].age);
    });
  });

  describe('GET /users/:id', () => {
    it('should work', async () => {
      const user = await app.factory.create('user');
      const res = await app.httpRequest().get(`/users/${user.id}`);
      assert(res.status === 200);
      assert(res.body.age === user.age);
    });
  });

  describe('POST /users', () => {
    it('should work', async () => {
      app.mockCsrf();
      let res = await app.httpRequest().post('/users')
        .send({
          age: 10,
          name: 'name',
        });
      assert(res.status === 201);
      assert(res.body.id);

      res = await app.httpRequest().get(`/users/${res.body.id}`);
      assert(res.status === 200);
      assert(res.body.name === 'name');
    });
  });

  describe('DELETE /users/:id', () => {
    it('should work', async () => {
      const user = await app.factory.create('user');

      app.mockCsrf();
      const res = await app.httpRequest().delete(`/users/${user.id}`);
      assert(res.status === 200);
    });
  });
});
