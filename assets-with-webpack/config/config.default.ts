import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544867050896_3341';

  // add your egg config in here
  config.middleware = [];

  config.view = {
    root: path.join(appInfo.baseDir, 'app/assets'),
    mapping: {
      '.html': 'assets',
    },
  };

  config.assets = {
    publicPath: '/public/',
    templatePath: path.join(appInfo.baseDir, 'app/assets/index.html'),
    templateViewEngine: 'nunjucks',
    devServer: {
      debug: false,
      command: 'webpack-dev-server --config config/webpack.dev.ts --mode development --color --progress --hot',
      port: 8888,
      env: {
        PUBLIC_PATH: 'http://127.0.0.1:8888',
      },
    },
  };

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
    },
  };

  config.security = {
    csrf: false,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
