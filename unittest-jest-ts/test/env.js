'use strict';
require('ts-node').register();
// tell egg loader to load ts file
process.env.EGG_TYPESCRIPT = 'true';
// use type check
process.env.TS_NODE_TYPE_CHECK = process.env.TS_NODE_TYPE_CHECK || 'true';
// load files from tsconfig on startup
process.env.TS_NODE_FILES = process.env.TS_NODE_FILES || 'true';
const NodeEnvironment = require('jest-environment-node');
const mock = require('egg-mock');

const app = mock.app();

module.exports = class CustomEnvironment extends NodeEnvironment {

  async setup() {
    await app.ready();
    await super.setup();
  }

  async teardown() {
    await app.close();
    await super.teardown();
  }

  runScript(script) {
    this.context.global.EggApp = app;
    return super.runScript(script);
  }
};
