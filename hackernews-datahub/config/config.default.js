'use strict';

const fs = require('fs');
const path = require('path');
const ipv4 = require('ipv4');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '123456';

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
    getTopStories: process.env.MOCK
      ? 'http://localhost:5678/data/hackernews/getTopStories'
      : `http://${ipv4}:7001/api/news`,
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks',
    },
  };

  // https://github.com/macacajs/macaca-datahub#configuration

  config.datahub = {
    port: 5678,
    store: path.resolve(__dirname, '..', 'data'),
  };

  return config;
};

