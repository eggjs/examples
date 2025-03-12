import assert from 'node:assert/strict';
import { app } from '@eggjs/mock/bootstrap';

describe('test/controller/HelloController.test.ts', () => {
  it('should work', async () => {
    const res = await app.httpRequest()
      .get('/hello?name=killa')
      .expect(200);
    assert.deepEqual(res.body, {
      success: true,
      data: {
        message: 'hello, killa (GET)',
      },
    });
  });
});
