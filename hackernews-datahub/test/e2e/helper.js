'use strict';

const {
  assert,
} = require('chai');
const wd = require('macaca-wd');

const {
  extendsMixIn,
} = require('macaca-wd/lib/helper');

extendsMixIn(wd);

exports.driver = wd.promiseChainRemote({
  host: 'localhost',
  port: process.env.MACACA_SERVER_PORT || 3456,
});

const shouldContains = (...substrs) => str => {
  substrs.forEach(substr => assert.include(str, substr));
};

wd.addPromiseChainMethod('hasText', function(cssSelector, ...texts) {
  return this
    .elementByCss(cssSelector)
    .text()
    .then(shouldContains(...texts));
});

exports.BASE_URL = 'http://127.0.0.1:7001/';
