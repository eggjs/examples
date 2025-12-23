import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.news = {
    pageSize: 20,
    serverUrl: '//127.0.0.1',
  };
  return config;
};
