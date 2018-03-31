import { EggAppConfig } from 'egg'
import { readFileSync } from 'fs'
import { join } from 'path'

import defaultConfig from './defaultConfig'


export default (appInfo: EggAppConfig) => {
  const config: any = {}

  // should change to your own for every new project!
  config.keys = appInfo.name + 1234567890

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  }

  // config.siteFile = {
  //   '/favicon.ico': readFileSync(join(appInfo.baseDir, 'app/public/favicon.png')),
  // }

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: { '.tpl': 'nunjucks' },
  }


  return { ...config, ...defaultConfig }
}
