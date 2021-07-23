import {
  HTTPController,
  HTTPMethod,
  HTTPMethodEnum,
  Context,
  EggContext,
  HTTPQuery,
  Middleware,
  Inject,
} from '@eggjs/tegg';
import { EggLogger } from 'egg';
import { traceMethod } from '../middleware/trace_method';
import { HelloService } from '../biz/HelloService';

@HTTPController()
@Middleware(traceMethod)
export class HelloController {
  @Inject()
  private readonly helloService: HelloService;

  @Inject()
  private readonly logger: EggLogger;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/hello',
  })
  async hello(@Context() ctx: EggContext, @HTTPQuery() name: string) {
    this.logger.info('access url: %s', ctx.url);

    const message = await this.helloService.hello(name);

    return {
      success: true,
      data: {
        message,
      },
    };
  }
}
