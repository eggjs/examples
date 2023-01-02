const path = require('path');
const fs = require('fs/promises');
const assert = require('assert');
const { app, mock } = require('egg-mock/bootstrap');

describe('example multipart test', () => {
  afterEach(mock.restore);
  after(() => fs.rm(path.join(app.config.baseDir, 'app/public'), { force: true, recursive: true }));

  describe('form', () => {
    it('should upload', async () => {
      app.mockCsrf();
      await app.httpRequest()
        .post('/form')
        .field('name', 'form')
        .attach('file', path.join(__dirname, 'mc.jpeg'))
        .expect('Location', '/public/form.jpeg')
        .expect(302);

      await app.httpRequest()
        .get('/public/form.jpeg')
        .expect('content-length', '6635')
        .expect(200);
    });
  });

  describe('multiple', () => {
    it('should upload', async () => {
      app.mockCsrf();
      await app.httpRequest()
        .post('/multiple-file')
        .field('name1', '1')
        .attach('file1', path.join(__dirname, 'mc.jpeg'))
        .field('name2', '2')
        .attach('file2', path.join(__dirname, 'kfc.jpeg'))
        .field('name3', '3')
        .expect(res => {
          assert(res.text.includes('name1: 1'));
          assert(res.text.includes('name2: 2'));
          assert(res.text.includes('name3: 3'));
          assert(res.text.includes('href="/public/mc.jpeg"'));
          assert(res.text.includes('href="/public/kfc.jpeg"'));
        })
        .expect(200);

      await app.httpRequest()
        .get('/public/mc.jpeg')
        .expect('content-length', '6635')
        .expect(200);

      await app.httpRequest()
        .get('/public/kfc.jpeg')
        .expect('content-length', '28810')
        .expect(200);
    });
  });

  describe('ajax', () => {
    it('should upload', async () => {
      app.mockCsrf();
      await app.httpRequest()
        .post('/ajax')
        .field('name', 'ajax')
        .attach('file', path.join(__dirname, 'mc.jpeg'))
        .expect({
          url: '/public/ajax.jpeg',
        })
        .expect(200);

      await app.httpRequest()
        .get('/public/ajax.jpeg')
        .expect('content-length', '6635')
        .expect(200);
    });
  });
});
