import {
  ContextProto,
  AccessLevel,
} from '@eggjs/tegg';

import { Advice, Pointcut, IAdvice, AdviceContext } from '@eggjs/tegg/aop';

@Advice()
class TestAOP implements IAdvice {
   // 在函数执行前执行
  async beforeCall(ctx: AdviceContext): Promise<void> {
    console.info(ctx);
  }
}

@ContextProto({
  accessLevel: AccessLevel.PUBLIC,
})
export class HelloService {
  @Pointcut(TestAOP)
  async hello(name: string): Promise<string> {
    return `hello, ${name}`;
  }
}
