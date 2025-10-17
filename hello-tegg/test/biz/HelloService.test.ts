import assert from 'node:assert/strict';
import { app } from '@eggjs/mock/bootstrap';

import { HelloService } from '../../app/biz/HelloService.ts';

describe('test/biz/HelloService.test.ts', () => {
  let helloService: HelloService;

  before(async () => {
    helloService = await app.getEggObject(HelloService);
  });

  it('should work', async () => {
    const msg = await helloService.hello('killa');
    assert.equal(msg, 'hello, killa');
  });
});
