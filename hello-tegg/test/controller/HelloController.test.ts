import { strict as assert } from 'node:assert';
import { app } from '@eggjs/mock/bootstrap';

describe('test/controller/HelloController.test.ts', () => {
  it('should work', async () => {
    await app.httpRequest()
      .get('/hello?name=killa')
      .expect(200)
      .expect(res => {
        assert.deepStrictEqual(res.body, {
          success: true,
          data: {
            message: 'hello, killa (GET)',
          },
        });
      });
  });
});
