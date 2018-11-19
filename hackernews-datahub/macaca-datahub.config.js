'use strict';

const path = require('path');

module.exports = {
  mode: 'local',
  port: 5678, // must be 5678, same with datahub-nodejs-sdk's default port
  store: path.resolve(__dirname, 'data'),
};
