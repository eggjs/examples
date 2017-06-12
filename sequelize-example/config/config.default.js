'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_sequelize-example';

  config.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    database: 'example-dev',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: 'password',
  };

  return config;
};
