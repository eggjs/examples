'use strict';

import { EggPlugin } from 'egg';

const plugin: EggPlugin = {};

plugin.sequelize = {
  package: 'egg-sequelize',
  enable: true,
};

export default plugin;
