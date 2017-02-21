'use strict';

exports.index = function* () {
  if (this.isAuthenticated()) {
    this.body = `<div>
      <h2>${this.path}</h2>
      <hr>
      Logined user: <img src="${this.user.photo}"> ${this.user.displayName} / ${this.user.id} | <a href="/logout">Logout</a>
      <pre><code>${JSON.stringify(this.user, null, 2)}</code></pre>
      <hr>
      <a href="/">Home</a> | <a href="/user">User</a>
    </div>`;
  } else {
    this.session.returnTo = this.path;
    this.body = `
      <div>
        <h2>${this.path}</h2>
        <hr>
        Login with
        <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> |
        <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
      </div>
    `;
  }
};
