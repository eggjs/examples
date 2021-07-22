import { Context } from 'egg';
import assert from 'assert';
import { app } from 'egg-mock/bootstrap';
import { HelloService } from '../../app/biz/HelloService';

describe('test/biz/HelloService.test.ts', () => {
  let ctx: Context;
  let helloService: HelloService;

  beforeEach(async () => {
    ctx = await app.mockModuleContext();
    helloService = await ctx.getEggObject(HelloService);
  });

  afterEach(async () => {
    await app.destroyModuleContext(ctx);
  });

  it('should work', async () => {
    const msg = await helloService.hello('killa');
    assert(msg === 'hello, killa');
  });
});
