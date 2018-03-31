import {
  AgentWorkerLoader,
  AppWorkerLoader,
  BaseContextClass,
  Controller as EggController,
  Service,
  Subscription,
} from 'egg'
// import * as egg from 'egg'

import Agent from './lib/agent'
import Application from './lib/application'
import startCluster from './lib/cluster'

// export = {
//   ...egg,
//   Agent,
//   Application,
//   startCluster,
// }

export {
  startCluster,
  Application,
  Agent,
  AppWorkerLoader,
  AgentWorkerLoader,
  EggController as Controller,
  Service,
  Subscription,
  BaseContextClass,
}
