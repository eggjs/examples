import { Context, EggAppConfig, Service } from 'egg'


/**
 * Test Service
 */
export default class Test extends Service {
  config: EggAppConfig

  constructor(ctx: Context) {
    super(ctx)
    this.config = <EggAppConfig> this.app.config.test
  }

  async get(id: number) {
    return { id, name: this.config.key }
  }
}

declare module 'egg' {
  export interface IService {
    test: Test
  }
}
