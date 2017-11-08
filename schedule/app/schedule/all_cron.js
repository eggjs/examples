'use strict';

const Subscription = require('egg').Subscription;

const now = new Date();
const start = (now.getSeconds() + 3) % 60;

class AllCron extends Subscription {
  async subscribe() {
    this.ctx.logger.info('all&&cron');
  }

  static get schedule() {
    return {
      cron: `${start}/30 * * * * *`,
      type: 'all',
    };
  }
}

module.exports = AllCron;
