'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
const mm = require('egg-mock');
const request = require('supertest');
const svg = fs.readFileSync(
  path.resolve(__dirname, '..', 'app/public/egg.svg')
);

describe('example download test', () => {
  let app;
  let server;

  before(function*() {
    app = mm.app();
    yield app.ready();
    server = app.listen();
  });

  after(() => app.close());

  it('should GET / and show download anchor', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect(/<a download href="\/download">download<\/a>/);
  });

  it('should GET /download and download egg.svg', () => {
    return request(server)
      .get('/download')
      .expect('Content-Type', 'application/octet-stream')
      .expect('Content-Disposition', 'attachment; filename="egg.svg"')
      .expect(200)
      .expect(res => {
        assert.deepStrictEqual(svg.toString(), res.text);
      });
  });
});
