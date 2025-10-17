import { defineConfigFactory } from 'egg';

export default defineConfigFactory(appInfo => {
  return {
    // override config from framework / plugin
    keys: appInfo.name + '123456',
  };
});
