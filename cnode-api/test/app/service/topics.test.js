'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/app/service/topics.test.js', () => {
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
      app.mockHttpclient(`${ctx.service.topics.root}/topic/57ea257b3670ca3f44c5beb6`, 'GET', {
        data: {
          success: true,
          data: {
            content: '<div class="markdown-text">Super Mock Content</div>',
            replies: [],
          },
        },
      });
      const topic = yield ctx.service.topics.show({
        id: '57ea257b3670ca3f44c5beb6',
        mdrender: true,
      });
      assert(topic);
      assert(typeof topic.content === 'string');
      assert(topic.content.indexOf('<div class="markdown-text">') >= 0);
      assert(Array.isArray(topic.replies));
    });

    it('should without render success', function* () {
      app.mockHttpclient(`${ctx.service.topics.root}/topic/57ea257b3670ca3f44c5beb6`, 'GET', {
        data: {
          success: true,
          data: {
            content: 'Super Mock Content',
            replies: [],
          },
        },
      });
      const topic = yield ctx.service.topics.show({
        id: '57ea257b3670ca3f44c5beb6',
        mdrender: false,
      });
      assert(topic);
      assert(typeof topic.content === 'string');
      assert(topic.content.indexOf('<div class="markdown-text">') === -1);
      assert(Array.isArray(topic.replies));
    });

    it('should response 404 when topic id not exist', function* () {
      app.mockHttpclient(`${ctx.service.topics.root}/topic/5433d5e4e737cbe96dcef300`, 'GET', {
        status: 404,
        data: {
          error_msg: '话题不存在',
        },
      });

      try {
        yield ctx.service.topics.show({
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
      app.mockHttpclient(`${ctx.service.topics.root}/topics`, 'GET', {
        data: {
          success: true,
          data: [
            {
              content: '<div class="markdown-text">mock content</div>',
            },
            {}, {}, {}, {},
          ],
        },
      });

      const topics = yield ctx.service.topics.list({
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
      app.mockHttpclient(`${ctx.service.topics.root}/topics`, 'POST', {
        status: 401,
        data: {
          error_msg: '错误的accessToken',
        },
      });

      try {
        yield ctx.service.topics.create({
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
      app.mockHttpclient(`${ctx.service.topics.root}/topics`, 'POST', {
        data: {
          success: true,
          topic_id: '5433d5e4e737cbe96dcef312',
        },
      });
      const id = yield ctx.service.topics.create({
        accesstoken: 'hello',
        title: 'title',
        content: 'content',
      });
      assert(id === '5433d5e4e737cbe96dcef312');
    });
  });

  describe('update()', () => {
    it('should update failed by accesstoken error', function* () {
      app.mockHttpclient(`${ctx.service.topics.root}/topics/update`, 'POST', {
        status: 401,
        data: {
          error_msg: '错误的accessToken',
        },
      });

      try {
        yield ctx.service.topics.update({
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
      app.mockHttpclient(`${ctx.service.topics.root}/topics/update`, 'POST', {
        data: {
          success: true,
          topic_id: '5433d5e4e737cbe96dcef312',
        },
      });
      yield ctx.service.topics.update({
        id: '57ea257b3670ca3f44c5beb6',
        accesstoken: 'hello',
        title: 'title',
        content: 'content',
      });
    });
  });
});
