'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  beforeEach(() => app.mockCsrf());

  it('should parse form', () => {
    return app.httpRequest()
      .post('/api/body')
      .type('form')
      .send({ name: 'TZ' })
      .expect({
        type: 'application/x-www-form-urlencoded',
        body: { name: 'TZ' },
      })
      .expect(200);
  });

  it('should parse json', () => {
    return app.httpRequest()
      .post('/api/body')
      .type('json')
      .send({ name: 'TZ' })
      .expect({
        type: 'application/json',
        body: { name: 'TZ' },
      })
      .expect(200);
  });

  it('should accept raw', () => {
    return app.httpRequest()
      .post('/api/body')
      .type('text')
      .send('this is a raw')
      .expect({
        type: 'text/plain',
        body: 'this is a raw',
      })
      .expect(200);
  });

  it('should accept xml', () => {
    return app.httpRequest()
      .post('/api/xml')
      .type('xml')
      .send('<User name="TZ"></User>')
      .expect({
        type: 'application/xml',
        body: { name: 'TZ' },
      })
      .expect(200);
  });

  it('should accept custom', () => {
    return app.httpRequest()
      .post('/api/body')
      .type('application/custom-json')
      .send(JSON.stringify({ name: 'TZ' }))
      .expect({
        type: 'application/custom-json',
        body: { name: 'TZ' },
      })
      .expect(200);
  });
});
