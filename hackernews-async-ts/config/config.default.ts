'use strict';

import { EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as path from 'path';
import 'source-map-support/register';

declare module 'egg' {
  export interface EggAppConfig {
    news: {
      pageSize: number;
      serverUrl: string;
    };
  }
}

module.exports = (appInfo: EggAppConfig) => {
  const config: any = {};

  // should change to your own
  config.keys = appInfo.name + '123456';

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  return config;
};
