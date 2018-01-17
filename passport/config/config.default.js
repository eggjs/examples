'use strict';

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

// 为了演示方便这里把 csrf 暂时关闭
exports.security = {
  csrf: {
    enable: false,
  },
};
