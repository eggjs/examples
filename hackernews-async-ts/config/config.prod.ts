import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.news = {
    pageSize: 30,
    serverUrl: '//foo.com',
  };
  return config;
};
