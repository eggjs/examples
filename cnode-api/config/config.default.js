'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '123456';

  config.middleware = [ 'errorHandler' ];

  return config;
};
