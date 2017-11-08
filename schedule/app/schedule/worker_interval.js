'use strict';

const Subscription = require('egg').Subscription;

class WorkerInterval extends Subscription {
  async subscribe() {
    this.ctx.logger.info('all&&interval');
  }

  static get schedule() {
    return {
      interval: 3000,
      type: 'worker',
    };
  }
}

module.exports = WorkerInterval;
