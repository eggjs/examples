'use strict';

const fs = require('fs');
const path = require('path');
const datahubConfig = require('../macaca-datahub.config');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '123456';

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  const mockPort = datahubConfig.port;
  const hubName = 'hackernews';

  config.news = {
    pageSize: 30,
    serverUrl: process.env.MOCK
      ? `http://localhost:${mockPort}/data/${hubName}`
      : 'https://hacker-news.firebaseio.com/v0',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks',
    },
  };

  return config;
};

