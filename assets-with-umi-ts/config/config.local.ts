import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.logger = {
    level: 'INFO',
    consoleLevel: 'INFO',
    allowDebugAtProd: true,
  };
  return config;
};
