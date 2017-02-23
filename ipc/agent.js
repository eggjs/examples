'use strict';

const Subscriber = require('./lib/subscriber');

module.exports = agent => {
  agent.logger.info('init subscriber');
  const subscriber = new Subscriber();
  subscriber.on('changed', () => agent.messenger.sendToApp('refresh', 'push'));
  subscriber.on('error', err => agent.logger.error(err));
};
