/* eslint valid-jsdoc: "off" */

const path = require('path');

module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  config.orm = {
    database: path.join(__dirname, '..', 'todos_unittest.sqlite3'),
  };

  return {
    ...config,
  };
};
