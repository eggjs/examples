import { EggAppConfig, PowerPartial } from 'egg';
import { readFileSync } from 'fs'
import { join } from 'path'


// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppConfig) => {
  const config = <PowerPartial<EggAppConfig>> {}

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  }

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: { '.tpl': 'nunjucks' },
  }

  config.siteFile = {
    '/favicon.ico': readFileSync(join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  return config;
}
