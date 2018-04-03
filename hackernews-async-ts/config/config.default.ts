'use strict';
import { EggAppConfig, EggConfig, PowerPartial } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export interface BizConfig {
  [key: string]: any;
  news: {
    pageSize: number;
    serverUrl: string;
  };
}

export type DefaultConfig = EggConfig & PowerPartial<BizConfig>;
export default (appInfo: EggAppConfig): EggConfig & BizConfig => {
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
