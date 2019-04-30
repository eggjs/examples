'use strict';

exports.keys = '123456';

// secure keys on https://github.com/eggjs/egg/wiki#secure-env-for-travis-ci
exports.passportWeibo = {
  key: 'a',
  secret: 'b',
};

exports.passportGithub = {
  key: 'c',
  secret: 'd',
};

exports.passportBitbucket = {
  key: 'e',
  secret: 'f',
};

exports.passportTwitter = {
  key: 'g',
  secret: 'h',
};

exports.passportYuque = {
  key: process.env.EGG_PASSPORT_YUQUE_CLIENT_ID || 'i',
  secret: process.env.EGG_PASSPORT_YUQUE_CLIENT_SECRET || 'j',
};
