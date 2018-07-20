'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/api/users.test.js', () => {

  describe('users()', () => {
    it('should success', async function() {
      await app.httpRequest()
        .get('/api/v1/users')
        .expect(200)
        .expect({
          message: 'index',
        });
    });
  });

  describe('find(id)', () => {
    it('should success', async function() {
      await app.httpRequest()
        .get('/api/v1/users/1')
        .expect(200)
        .expect({
          id: 1,
        });
    });
  });

  describe('create()', () => {
    it('should success', async function() {
      await app.httpRequest()
        .post('/api/v1/users')
        .send({
          name: 'jeff',
          age: 18,
        })
        .expect(201)
        .expect({
          data: {
            name: 'jeff',
            age: 18,
          },
        });
    });
  });

  describe('update()', () => {
    it('should success', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .put('/api/v1/users/1')
        .send({
          name: 'update',
          age: 19,
        })
        .expect(200)
        .expect({
          id: 1,
          data: {
            name: 'update',
            age: 19,
          },
        });
    });
  });

  describe('del()', () => {
    it('should success', async function() {
      app.mockCsrf();
      await app.httpRequest()
        .del('/api/v1/users/1')
        .expect(200)
        .expect({
          id: 1,
        });
    });
  });
});
