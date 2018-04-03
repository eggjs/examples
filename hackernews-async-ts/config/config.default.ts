'use strict';
import { EggAppConfig, PowerPartial } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// 本应用的自定义配置的定义
export interface BizConfig {
  news: {
    pageSize: number;
    serverUrl: string;
  };
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  config.keys = appInfo.name + '123456';

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  return config;
};
