'use strict';

const Application = require('./lib/application');
const Agent = require('./lib/agent');
const egg = require('egg');

// clone egg API
Object.assign(exports, egg);

// override Application and Agent
exports.Application = Application;
exports.Agent = Agent;
