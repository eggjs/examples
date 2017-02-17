'use strict';

const assert = require('assert');
const request = require('supertest');
const mm = require('egg-mock');
const formstream = require('formstream');
const urllib = require('urllib');

describe('example multipart test', () => {
  let app;
  let csrfToken;
  let cookies;
  let host;
  let server;

  before(function* () {
    app = mm.app();
    yield app.ready();
    server = app.listen();
  });

  after(() => app.close());

  it('should GET / show upload form', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect(/<p>Image: <input type="file" name="image" \/><\/p>/)
      .expect(res => {
        console.log(res.headers, res.text);
        cookies = res.headers['set-cookie'].join(';');
        csrfToken = cookies.match(/csrfToken=(.*?);/)[1];
        host = `http://127.0.0.1:${server.address().port}`;
      });
  });

  it('should POST /upload success', done => {
    const form = formstream();
    form.file('file', __filename);
    // other form fields
    form.field('title', 'fengmk2 test title')
      .field('love', 'egg');

    const headers = form.headers();
    headers.Cookie = cookies;
    urllib.request(`${host}/upload?_csrf=${csrfToken}`, {
      method: 'POST',
      headers,
      stream: form,
      dataType: 'json',
    }, (err, data, res) => {
      assert(!err, err && err.message);
      assert.equal(res.statusCode, 200);
      console.log(data);
      done();
    });
  });
});
