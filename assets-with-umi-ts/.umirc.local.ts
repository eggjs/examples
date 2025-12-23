import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  proxy: {
    '/restapi': {
      target: 'http://127.0.0.1:7001/',
      changeOrigin: true,
    },
  },
};

export default config;
