'use strict';

const wd = require('macaca-wd');
const {
  extendsMixIn,
} = require('macaca-wd/lib/helper');

extendsMixIn(wd);

const port = 7001;

const BASE_URL = `http://127.0.0.1:${port}`;

wd.addPromiseChainMethod('initWindow', function(options = {}) {
  return this
    .init(Object.assign({
      platformName: 'desktop',
      browserName: 'electron',
      deviceScaleFactor: 2,
    }, options))
    .setWindowSize(options.width, options.height);
});

const driver = wd.promiseChainRemote({
  host: 'localhost',
  port: process.env.MACACA_SERVER_PORT || 3456,
});

exports.driver = driver;
exports.BASE_URL = BASE_URL;
