import { EggAppConfig } from 'egg'


export class DefaultConfig {
}

export default new DefaultConfig()

declare module 'egg' {
  export interface Application {
    config: EggAppConfig & DefaultConfig
  }
}
