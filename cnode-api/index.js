'use strict';

// npm run dev DO NOT read this file

const isLocal = process.env.NODE_ENV !== 'production' && !process.env.EGG_SERVER_ENV;

require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 7001, // default to 7001
  workers: isLocal ? 1 : undefined, // default to cpu count
});
