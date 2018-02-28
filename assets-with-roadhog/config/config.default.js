'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513765449219_5858';

  // add your config here
  config.middleware = [];

  config.view = {
    root: path.join(appInfo.baseDir, 'app/assets'),
    mapping: {
      '.js': 'assets',
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    url: 'http://127.0.0.1:7001',
    urlPrefix: '/public',
    // publicPath: '/public/',
    devServer: {
      command: 'roadhog dev',
      port: 8000,
      env: {
        BROWSER: 'none',
        DISABLE_ESLINT: true,
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
      },
    },
  };

  config.security = {
    csrf: false,
  };

  return config;
};
