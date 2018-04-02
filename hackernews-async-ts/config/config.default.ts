'use strict';
import { EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export default (appInfo: EggAppConfig) => {
  return {
    keys: appInfo.name + '123456',
    siteFile: {
      '/favicon.ico': fs.readFileSync(
        path.join(appInfo.baseDir, 'app/public/favicon.png'),
      ),
    },
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    news: {
      /**
       * page size
       */
      pageSize: 30,

      /**
       * hacker news server url
       */
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
    },
  };
};
