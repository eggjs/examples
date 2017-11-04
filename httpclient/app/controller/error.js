'use strict';

module.exports = async function error() {
  try {
    await this.curl('http://not_exists_domain.com');
  } catch (err) {
    console.log(err);
  }
  try {
    await this.curl('http://127.0.0.1:1999/foo');
  } catch (err) {
    console.log(err);
  }
  try {
    await this.curl('https://registry.npmjs.com/npm', {
      timeout: 500,
    });
  } catch (err) {
    console.log(err);
  }
  this.body = 'ok';
};
