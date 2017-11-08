'use strict';

const Subscription = require('egg').Subscription;

const now = new Date();
const start = (now.getSeconds() + 3) % 60;

class WorkerCron extends Subscription {
  async subscribe() {
    this.ctx.logger.info('worker&&cron');
  }

  static get schedule() {
    return {
      cron: `${start}/30 * * * * *`,
      type: 'worker',
    };
  }
}

module.exports = WorkerCron;
