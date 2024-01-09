import { Application as EggApplication } from 'egg'
import { dirname } from 'path'

export const EGG_PATH = Symbol.for('egg#eggPath')

export default class Application extends EggApplication {
  get [EGG_PATH]() {
    return dirname(__dirname)
  }
}


