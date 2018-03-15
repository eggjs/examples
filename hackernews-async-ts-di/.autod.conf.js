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
    'egg-bin',
  ],
  keep: [
    'tslib',
    'typescript',
  ],
  semver: [
  ],
  test: 'scripts',
};
