'use strict';

const Controller = require('egg').Controller;

class CookieController extends Controller {

  async home() {
    const ctx = this.ctx;

    if (ctx.cookies.get('remember')) {
      ctx.body = '<p>Remembered :). Click to <a href="/forget">forget</a>!.</p>';
      return;
    }

    ctx.body = `<form method="post" action="/remember"><p>Check to <label>
      <input type="checkbox" name="remember"/> remember me</label>
      <input type="submit" value="Submit"/>.</p></form>`;
  }

  async forget() {
    const ctx = this.ctx;

    ctx.cookies.set('remember', null);
    ctx.redirect('/');
  }

  async remember() {
    const ctx = this.ctx;

    const minute = 60000;
    if (ctx.request.body.remember) {
      ctx.cookies.set('remember', 1, { maxAge: minute });
    }
    ctx.redirect('/');
  }

}

module.exports = CookieController;
