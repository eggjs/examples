'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528713428903_3456';

  // add your config here
  config.middleware = [];

  config.sofaRpc = {
    registry: {
      address: '127.0.0.1:2181', // 根据实际情况配置
    },
    server: {
      namespace: 'com.alipay.sofa.rpc.protobuf',
    },
  };

  return config;
};
