'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');

describe('test/app/controller/topic.test.js', () => {
  let app;
  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET /api/v2/topics', function* () {
    const r = yield request(app.callback())
    .get('/api/v2/topics')
    .expect(200);

    assert(Array.isArray(r.body));
    assert(typeof r.body[0].content === 'string');
  });

  it('should GET /api/v2/topics error', function* () {
    const err = new Error('client error');
    err.status = 400;
    app.mockServiceError('topic', 'list', err);
    yield request(app.callback())
    .get('/api/v2/topics')
    .expect(400)
    .expect({ error: 'client error' });
  });

  it('should GET /api/v2/topics/:id 404', function* () {
    yield request(app.callback())
    .get('/api/v2/topics/999999999999')
    .expect(404);
  });

  it('should POST /api/v2/topics/ 422', function* () {
    app.mockCsrf();
    yield request(app.callback())
    .post('/api/v2/topics')
    .send({
      accesstoken: '123',
    })
    .expect(422)
    .expect({
      error: 'Validation Failed',
      detail: [{ message: 'required', field: 'title', code: 'missing_field' }, { message: 'required', field: 'content', code: 'missing_field' }],
    });
  });

  it('should POST /api/v2/topics/ 201', function* () {
    app.mockCsrf();
    app.mockService('topic', 'create', 123);
    yield request(app.callback())
    .post('/api/v2/topics')
    .send({
      accesstoken: '123',
      title: 'title',
      content: 'hello',
    })
    .expect(201)
    .expect({
      topic_id: 123,
    });
  });

  it('should PUT /api/v2/topics/1 204', function* () {
    app.mockCsrf();
    app.mockService('topic', 'update', null);
    yield request(app.callback())
    .put('/api/v2/topics/1')
    .send({
      accesstoken: '123',
      title: 'title',
      content: 'hello',
    })
    .expect(204);
  });
});
