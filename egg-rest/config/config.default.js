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
    username: 'sinchang',
    password: '',
  };

  config.rest = {
    urlprefix: '/api/v1/', // Prefix of rest api url. Default to /api/
    authRequest: null,
    // authRequest: async ctx => {
    //   // A truthy value must be returned when authentication succeeds.
    //   // Otherwise the client will be responded with `401 Unauthorized`
    //   return accessToken;
    // }
  
    // Specify the APIs for which authentication can be ignored.
    // If authRequest is configured, authentication for all APIs is required by default.
    authIgnores: null,
    // authIgnores: {
    //   users: {
    //     show: true, // allow GET /api/users/:id to ignore authentication
    //     index: true,
    //   }
    // }
  };

  config.security = {
    csrf: {
      ignore: '/api/v1/'
    }
  };

  return config;
};
