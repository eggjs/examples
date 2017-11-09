'ues strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'examples',
    'docs',
    'run',
  ],
  devdep: [
    'egg-bin',
  ],
  dep: [
    'egg',
  ],
  semver: [
  ],
  test: 'scripts',
};
