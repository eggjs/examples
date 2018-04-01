'use strict';
import { EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export default function config(appInfo: EggAppConfig) {
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
      pageSize: 30,
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
    },
  };
};

declare module 'egg' {
  interface Application {
    config: EggAppConfig & ReturnType<typeof config>;
  }
}
