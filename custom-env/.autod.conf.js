'use strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  test: [
    'test',
  ],
  dep: [
    'egg',
  ],
  devdep: [
    'egg-bin',
    'autod',
    'autod-egg',
    'supertest',
  ],
  exclude: [
    './test/fixtures',
    './dist',
  ],
  registry: 'https://r.cnpmjs.org',
};
