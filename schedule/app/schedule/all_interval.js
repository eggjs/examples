'use strict';

const Subscription = require('egg').Subscription;

class AllInterval extends Subscription {
  async subscribe() {
    this.ctx.logger.info('all&&interval');
  }

  static get schedule() {
    return {
      interval: 3000,
      type: 'all',
    };
  }
}

module.exports = AllInterval;
