'use strict';

const BaseClass = require('egg-core/lib/utils/base_context_class');
const egg = require('egg');
egg.Controller = BaseClass;
egg.Service = BaseClass;

require('source-map-support').install();
