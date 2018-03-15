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
    'eslint',
    'eslint-config-egg',
  ],
  dep: [
    'egg',
    'egg-scripts',
  ],
  semver: [
  ],
  test: 'scripts',
};
