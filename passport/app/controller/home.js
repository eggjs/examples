'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    const ctx = this.ctx;

    if (ctx.isAuthenticated()) {
      ctx.body = `<div>
        <h2>${ctx.path}</h2>
        <hr>
        Logined user: <img src="${ctx.user.photo}"> ${ctx.user.displayName} / ${ctx.user.id} | <a href="/logout">Logout</a>
        <pre><code>${JSON.stringify(ctx.user, null, 2)}</code></pre>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
      </div>`;
    } else {
      ctx.session.returnTo = ctx.path;
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> |
          <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a> |
          <a href="/login">Local</a>
          <hr>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `;
    }
  }

  async local() {
    const { ctx } = this;
    if (ctx.isAuthenticated()) {
      ctx.body = ctx.user;
    } else {
      ctx.body = `
      <h1>egg-passport-local login page</h1>
      <form method="post" action="/passport/local">
        <div>
            <label>Username:</label>
            <input type="text" name="username"/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password"/>
        </div>
        <div>
            <input type="submit" value="Log In"/>
        </div>
      </form>
      `;
    }
  }
}

module.exports = HomeController;
