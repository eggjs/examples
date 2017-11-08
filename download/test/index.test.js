'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const mm = require('egg-mock');
const request = require('supertest');

describe('example download test', () => {
  let app;
  let server;
  let file;

  before(async () => {
    app = mm.app();
    await app.ready();
    server = app.listen();
    file = fs.readFileSync(path.resolve(app.config.static.dir, 'hello.txt'));
  });

  after(() => app.close());

  it('should GET / and show download anchor', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect(/<a download href="\/download">download<\/a>/);
  });

  it('should GET /download and download hello.txt', () => {
    return request(server)
      .get('/download')
      .expect('Content-Type', 'application/octet-stream')
      .expect('Content-Disposition', 'attachment; filename="hello.txt"')
      .expect(200)
      .expect(res => {
        assert.deepStrictEqual(file.toString(), res.body.toString());
      });
  });
});
