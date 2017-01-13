'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/app/service/topic.test.js', () => {
  let app;
  let ctx;
  before(function* () {
    app = mock.app();
    yield app.ready();
    ctx = app.mockContext();
  });

  afterEach(mock.restore);

  describe('show()', () => {
    it('should with render success', function* () {
      const topic = yield ctx.service.topic.show({
        id: '57ea257b3670ca3f44c5beb6',
        mdrender: true,
      });
      assert(topic);
      assert(typeof topic.content === 'string');
      assert(topic.content.indexOf('<div class="markdown-text">') >= 0);
      assert(Array.isArray(topic.replies));
    });

    it('should without render success', function* () {
      const topic = yield ctx.service.topic.show({
        id: '57ea257b3670ca3f44c5beb6',
        mdrender: false,
      });
      assert(topic);
      assert(typeof topic.content === 'string');
      assert(topic.content.indexOf('<div class="markdown-text">') === -1);
      assert(Array.isArray(topic.replies));
    });

    it('should response 404 when topic id not exist', function* () {
      try {
        yield ctx.service.topic.show({
          id: '5433d5e4e737cbe96dcef300',
          mdrender: false,
        });
        throw new Error('should not excute');
      } catch (err) {
        assert(err.status === 404);
        assert(err.message === '话题不存在');
      }
    });
  });

  describe('list()', () => {
    it('should with render, limit and tab success', function* () {
      const topics = yield ctx.service.topic.list({
        mdrender: true,
        limit: 5,
        tab: 'share',
      });
      assert(topics);
      assert(topics.length === 5);
      assert(typeof topics[0].content === 'string');
      assert(topics[0].content.indexOf('<div class="markdown-text">') >= 0);
    });
  });

  describe('create()', () => {
    it('should create failed by accesstoken error', function* () {
      try {
        yield ctx.service.topic.create({
          accesstoken: 'hello',
          title: 'title',
          content: 'content',
        });
      } catch (err) {
        assert(err.status === 401);
        assert(err.message === '错误的accessToken');
      }
    });

    it('should create success', function* () {
      app.mockHttpclient(`${ctx.service.topic.root}/topics`, 'POST', {
        data: {
          success: true,
          topic_id: '5433d5e4e737cbe96dcef312',
        },
      });
      const id = yield ctx.service.topic.create({
        accesstoken: 'hello',
        title: 'title',
        content: 'content',
      });
      assert(id === '5433d5e4e737cbe96dcef312');
    });
  });

  describe('update()', () => {
    it('should update failed by accesstoken error', function* () {
      try {
        yield ctx.service.topic.update({
          id: '57ea257b3670ca3f44c5beb6',
          accesstoken: 'hello',
          title: 'title',
          content: 'content',
        });
      } catch (err) {
        assert(err.status === 401);
        assert(err.message === '错误的accessToken');
      }
    });

    it('should update success', function* () {
      app.mockHttpclient(`${ctx.service.topic.root}/topics/update`, 'POST', {
        data: {
          success: true,
          topic_id: '5433d5e4e737cbe96dcef312',
        },
      });
      yield ctx.service.topic.update({
        id: '57ea257b3670ca3f44c5beb6',
        accesstoken: 'hello',
        title: 'title',
        content: 'content',
      });
    });
  });
});
