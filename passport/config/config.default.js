'use strict';

exports.keys = 'egg-examples';

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

exports.view = {
  defaultViewEngine: 'nunjucks',
};
