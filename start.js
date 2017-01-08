'use strict';

const path = require('path');
const egg = require('egg');

const name = process.argv[2];
console.log('Starting %s', name);

egg.startCluster({
  baseDir: path.join(__dirname, 'apps', name),
});
