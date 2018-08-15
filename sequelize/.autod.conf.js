'ues strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'run',
  ],
  devdep: [
    'egg-bin',
    'sequelize-cli',
  ],
  dep: [
    'egg',
    'egg-sequelize',
    'mysql2',
  ],
  semver: [
  ],
};
