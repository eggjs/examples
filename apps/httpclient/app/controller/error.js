'use strict';

module.exports = function* error() {
  try {
    yield this.curl('http://not_exists_domain.com');
  } catch (err) {
    console.log(err);
  }
  try {
    yield this.curl('http://127.0.0.1:1999/foo');
  } catch (err) {
    console.log(err);
  }
  try {
    yield this.curl('https://registry.npmjs.com/npm', {
      timeout: 500,
    });
  } catch (err) {
    console.log(err);
  }
  this.body = 'ok';
};
