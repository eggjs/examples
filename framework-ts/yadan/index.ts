import { BaseContextClass, Controller, EggApplication, Service } from 'egg'

import Agent from './lib/agent'
import Application from './lib/application'
import startCluster from './lib/cluster'

export {
  Agent,
  Application,
  startCluster,

  BaseContextClass,
  Controller,
  EggApplication,
  Service,
}
