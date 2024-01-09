import { Agent as EggAgent } from 'egg'
import { dirname } from 'path'


export const EGG_PATH = Symbol.for('egg#eggPath')

export default class Agent extends EggAgent {
  get [EGG_PATH]() {
    return dirname(__dirname)
  }
}
