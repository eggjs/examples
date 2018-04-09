import * as egg from 'egg'

import Agent from './lib/agent'
import Application from './lib/application'
import startCluster from './lib/cluster'

const newEgg = {
  ...egg,
  Agent,
  Application,
  startCluster,
}
export = newEgg
