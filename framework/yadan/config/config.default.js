'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = 'keys';

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
  };

  return config;
};
