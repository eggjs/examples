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
    },
  };

  config.assets = {
    publicPath: '/public/',
    devServer: {
      debug: false,
      autoPort: true,
      command: 'roadhog dev',
      env: {
        PORT: '{port}',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:{port}',
        PUBLIC_PATH: 'http://127.0.0.1:{port}',
      },
    },
  };

  config.security = {
    csrf: false,
  };

  return config;
};
