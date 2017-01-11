'use strict';

const request = require('supertest');
const assert = require('assert');
const mock = require('egg-mock');

describe('test/controller/home.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('GET /', () => {
    it('should status 200 and get the body', () => {
      return request(app.callback())
        .get('/')
        .expect(200)
        .expect('hello world');
    });
  });

  describe('POST /post', () => {
    it('should status 200 and get the request body', () => {
      app.mockCsrf();
      return request(app.callback())
        .post('/post')
        .send({
          foo: 'bar',
        })
        .expect(200)
        .expect({
          foo: 'bar',
        });
    });
  });

  describe('GET /session', () => {
    it('should mock session work', () => {
      app.mockSession({
        foo: 'bar',
        uid: 123,
      });
      return request(app.callback())
        .get('/session')
        .expect(200)
        .expect({
          session: {
            foo: 'bar',
            uid: 123,
          },
        });
    });
  });

  describe('GET /user', () => {
    it('should exists user', () => {
      return request(app.callback())
        .get('/user?name=fengmk2')
        .expect(200)
        .expect({
          user: {
            name: 'fengmk2',
            home: 'HangZhou',
            url: 'https://fengmk2.com',
          },
        });
    });

    it('should mock service error', () => {
      app.mockServiceError('user', 'get', 'mock user service error');
      return request(app.callback())
        .get('/user?name=fengmk2')
        .expect(500)
        .expect(/mock user service error/);
    });
  });

  describe('GET /httpclient', () => {
    it('should mock httpclient response', () => {
      app.mockHttpclient('https://eggjs.org', {
        // 模拟的参数，可以是 buffer / string / json，
        // 都会转换成 buffer
        // 按照请求时的 options.dataType �来做对应的转换
        data: 'mock eggjs.org response',
      });
      return request(app.callback())
        .get('/httpclient')
        .expect('mock eggjs.org response');
    });
  });

  describe('ctx', () => {
    it('should get a ctx', () => {
      const ctx = app.mockContext();
      assert(ctx.method === 'GET');
      assert(ctx.url === '/');
    });

    it('should mock ctx.user', () => {
      const ctx = app.mockContext({
        user: {
          name: 'fengmk2',
        },
      });
      assert(ctx.user);
      assert(ctx.user.name === 'fengmk2');
    });
  });
});
