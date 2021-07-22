import { EggAppConfig, PowerPartial } from 'egg';

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  config.keys = appInfo.name + '123456';

  return config;
};
