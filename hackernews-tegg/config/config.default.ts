import { defineConfigFactory, type EggAppConfig } from 'egg';

// for config.{env}.ts
export type DefaultConfig = Partial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
  news: {
    pageSize: number;
    serverUrl: string;
  };
}

export default defineConfigFactory(appInfo => {
  return {
    // override config from framework / plugin
    keys: appInfo.name + '123456',
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    siteFile: {
      '/favicon.ico': 'https://eggjs.org/favicon.png',
    },
    // app special config
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    news: {
      pageSize: 30,
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
    },
  };
});
