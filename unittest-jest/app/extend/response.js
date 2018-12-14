'use strict';

module.exports = {
  get isSuccess() {
    return this.status === 200;
  },
};
