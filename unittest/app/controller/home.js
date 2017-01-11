'use strict';

exports.index = function* () {
  this.body = 'hello world';
};

exports.post = function* () {
  this.body = this.request.body;
};

exports.session = function* () {
  this.body = {
    session: this.session,
  };
};

exports.user = function* () {
  const user = yield this.service.user.get(this.query.name);
  this.body = {
    user,
  };
};

exports.httpclient = function* () {
  const res = yield this.curl('https://eggjs.org');
  this.body = res.data.toString();
};
