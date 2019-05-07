'use strict';

const fs = require('fs');
const FormStream = require('formstream');
const Controller = require('egg').Controller;

class HttpclientController extends Controller {
  async del() {
    const ctx = this.ctx;

    const result = await ctx.curl('https://httpbin.org/delete', {
      // 必须指定 method
      method: 'DELETE',
      dataType: 'json',
    });
    ctx.body = result.data;
  }

  async error() {
    const ctx = this.ctx;

    try {
      await ctx.curl('http://not_exists_domain.com');
    } catch (err) {
      console.log(err);
    }
    try {
      await ctx.curl('http://127.0.0.1:1999/foo');
    } catch (err) {
      console.log(err);
    }
    try {
      await ctx.curl('https://registry.npmjs.com/npm', {
        timeout: 500,
      });
    } catch (err) {
      console.log(err);
    }
    ctx.body = 'ok';
  }

  async form() {
    const ctx = this.ctx;

    const result = await ctx.curl('https://httpbin.org/post', {
      // 必须指定 method，支持 POST，PUT 和 DELETE
      method: 'POST',
      // 不需要设置 contentType，httpclient 会默认以 application/x-www-form-urlencoded 格式发送请求
      data: {
        // 注意：由于 form 格式发送的数据是无法区分类型的，所以服务端收到 now 字段将是字符串而不是数字
        now: Date.now(),
        foo: 'bar',
      },
      // 明确告诉 httpclient 以 JSON 格式处理响应 body
      dataType: 'json',
    });
    ctx.body = result.data.form;
  }

  async get() {
    const ctx = this.ctx;
    const result = await ctx.curl('https://httpbin.org/get?foo=bar');
    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }

  async home() {
    const ctx = this.ctx;
    // 示例：请求一个 npm 模块信息
    const result = await ctx.curl('https://registry.npmjs.com/egg/latest', {
      // 自动解析 JSON response
      dataType: 'json',
      // 3秒超时
      timeout: 3000,
    });

    ctx.body = {
      status: result.status,
      headers: result.headers,
      package: result.data,
    };
  }

  async multipart() {
    const ctx = this.ctx;

    const form = new FormStream();
    // 设置普通的 key value
    form.field('foo', 'bar');
    // 上传当前文件本身用于测试
    form.file('file', __filename);

    const result = await ctx.curl('https://httpbin.org/post', {
      // 必须指定 method，支持 POST，PUT
      method: 'POST',
      // 生成符合 multipart/form-data 要求的请求 headers
      headers: form.headers(),
      // 以 stream 模式提交
      stream: form,
      // 明确告诉 httpclient 以 JSON 格式处理响应 body
      dataType: 'json',
    });
    ctx.body = result.data.files;
  }

  // https://github.com/node-modules/urllib/pull/322
  async files() {
    const ctx = this.ctx;

    const result = await ctx.curl('https://httpbin.org/post', {
      // 必须指定 method，支持 POST，PUT
      method: 'POST',
      // 上传文件
      files: {
        file1: __filename,
        file2: Buffer.from('mock file content'),
      },
      // 其他 Field
      data: {
        foo: 'bar',
      },
      // 明确告诉 httpclient 以 JSON 格式处理响应 body
      dataType: 'json',
    });
    ctx.body = result.data.files;
  }

  async postStream() {
    const ctx = this.ctx;

    let size = 0;
    ctx.req.on('data', data => {
      size += data.length;
    });
    ctx.req.resume();
    await end(ctx.req);

    ctx.body = {
      streamSize: size,
    };
  }

  async post() {
    const ctx = this.ctx;

    const result = await ctx.curl('https://httpbin.org/post', {
      // 必须指定 method
      method: 'POST',
      // 通过 contentType 告诉 httpclient 以 JSON 格式发送
      contentType: 'json',
      data: {
        hello: 'world',
        now: Date.now(),
      },
      // 明确告诉 httpclient 以 JSON 格式处理响应 body
      dataType: 'json',
    });
    ctx.body = result.data;
  }

  async put() {
    const ctx = this.ctx;
    const result = await ctx.curl('https://httpbin.org/put', {
      // 必须指定 method
      method: 'PUT',
      // 通过 contentType 告诉 httpclient 以 JSON 格式发送
      contentType: 'json',
      data: {
        update: 'foo bar',
      },
      // 明确告诉 httpclient 以 JSON 格式处理响应 body
      dataType: 'json',
    });
    ctx.body = result.data;
  }

  async stream() {
    const ctx = this.ctx;

    // 上传当前文件本身用于测试
    const fileStream = fs.createReadStream(__filename);
    const url = `${ctx.protocol}://${ctx.host}/stream`;
    const result = await ctx.curl(url, {
    // 必须指定 method，支持 POST，PUT
      method: 'POST',
      // 以 stream 模式提交
      stream: fileStream,
    });

    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  // 响应最终会是类似以下的结果：
  // {"streamSize":574}
  }

}

module.exports = HttpclientController;

function end(req) {
  return new Promise((resolve, reject) => {
    req.on('end', resolve);
    req.on('error', reject);
  });
}
