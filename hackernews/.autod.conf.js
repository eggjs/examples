'ues strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
  ],
  dep: [
    'egg',
  ],
  devdep: [
    'autod',
    'autod-egg',
    'eslint',
    'eslint-config-egg',
    'egg-bin',
  ],
  keep: [
  ],
  semver: [
  ],
  test: 'scripts',
};
