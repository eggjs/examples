'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  beforeEach(() => {
    app.mockCsrf();
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
  });

  it('should list todo', () => {
    return app.httpRequest()
      .get('/api/todo')
      .expect('Content-Type', /json/)
      .expect('X-Response-Time', /\d+ms/)
      .expect(200)
      .then(res => {
        assert(res.body[0].title.includes('Node.js'));
      });
  });

  it('should GET list with filter: completed=false', () => {
    return app.httpRequest()
      .get('/api/todo')
      .query({ completed: false })
      .expect('Content-Type', /json/)
      .expect('X-Response-Time', /\d+ms/)
      .expect(200)
      .then(res => {
        assert(res.body[0].title.includes('Egg'));
      });
  });

  it('should add todo', () => {
    return app.httpRequest()
      .post('/api/todo')
      .send({ title: 'Add one' })
      .expect('Content-Type', /json/)
      .expect('X-Response-Time', /\d+ms/)
      .expect(201)
      .then(res => {
        assert(res.body.id);
        assert(res.body.title === 'Add one');
        assert(res.body.completed === false);
      });
  });

  it('should add todo fail', () => {
    return app.httpRequest()
      .post('/api/todo')
      .set('Accept', 'application/json')
      .send({ title: undefined })
      .expect(422)
      .expect({
        code: 'invalid_param',
        errors: [{
          code: 'missing_field',
          field: 'title',
          message: 'required',
        }],
        message: 'Validation Failed',
      });
  });

  it('should update todo', async () => {
    await app.httpRequest()
      .put('/api/todo/1')
      .send({ id: '1', title: 'Modify Node.js' })
      .expect('X-Response-Time', /\d+ms/)
      .expect(204);

    // validate
    await app.httpRequest()
      .get('/api/todo')
      .expect(200)
      .then(res => {
        assert(res.body[0].title === 'Modify Node.js');
      });
  });

  it('should update todo fail', () => {
    return app.httpRequest()
      .put('/api/todo/999')
      .set('Accept', 'application/json')
      .send({ id: '1', title: undefined })
      .expect(422)
      .expect({
        code: 'invalid_param',
        errors: [{
          code: 'missing_field',
          field: 'title',
          message: 'required',
        }],
        message: 'Validation Failed',
      });
  });

  it('should update todo fail with not found', () => {
    return app.httpRequest()
      .put('/api/todo/999')
      .set('Accept', 'application/json')
      .send({ id: '999', title: 'Modify Node.js' })
      .expect(500)
      .then(res => {
        assert(res.body.message === 'task#999 not found');
      });
  });

  it('should delete todo', async () => {
    await app.httpRequest()
      .delete('/api/todo/1')
      .expect(204);

    // validate
    await app.httpRequest()
      .get('/api/todo')
      .expect('X-Response-Time', /\d+ms/)
      .expect(200)
      .then(res => {
        assert(res.body[0].title.includes('Koa'));
      });
  });

  it('should delete todo fail', () => {
    return app.httpRequest()
      .delete('/api/todo/999')
      .set('Accept', 'application/json')
      .expect(500)
      .then(res => {
        assert(res.body.message === 'task#999 not found');
      });
  });
});
