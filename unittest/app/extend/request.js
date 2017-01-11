'use strict';

const IS_CHROME = Symbol('Request#isChrome');

module.exports = {
  get isChrome() {
    if (!this[IS_CHROME]) {
      const ua = this.get('User-Agent').toLowerCase();
      this[IS_CHROME] = ua.includes('chrome/');
    }
    return this[IS_CHROME];
  },
};
