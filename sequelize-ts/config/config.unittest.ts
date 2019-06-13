'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function() {
  const config = {} as PowerPartial<EggAppConfig>;

  config.sequelize = {
    database: 'egg-sequelize-ts-unittest',
  };

  return config;
}
