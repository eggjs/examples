'use strict';

module.exports = {
  get isXHR() {
    return this.get('X-Requested-With') === 'XMLHttpRequest';
  },
};
