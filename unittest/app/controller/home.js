'use strict';

exports.index = async function() {
  this.body = 'hello world';
};

exports.post = async function() {
  this.body = this.request.body;
};

exports.session = async function() {
  this.body = {
    session: this.session,
  };
};

exports.user = async function() {
  const user = await this.service.user.get(this.query.name);
  this.body = {
    user,
  };
};

exports.httpclient = async function() {
  const res = await this.curl('https://eggjs.org');
  this.body = res.data.toString();
};
