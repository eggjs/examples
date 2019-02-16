/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550284917803_8371';

  // add your middleware config here
  config.middleware = [
    'responseTime',
  ];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.tpl': 'nunjucks',
    },
  };

  // add your user config here
  const userConfig = {
    responseTime: {
      headerKey: 'X-Response-Time',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
