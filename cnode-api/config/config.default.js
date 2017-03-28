'use strict';

module.exports = {
  middleware: [ 'errorHandler' ],
  errorHandler: {
    match: '/api',
  },
  keys: 'my super cool keys',
};
