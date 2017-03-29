'use strict';

const co = require('co');

module.exports = app => {
  app.curl = co.wrap(app.curl);
};
