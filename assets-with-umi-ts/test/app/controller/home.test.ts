import assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /', async () => {
    const result = await app.httpRequest().get('/').expect(200);
    // tslint:disable-next-line:no-empty-character-class
    assert(/<div id="root"><\/div>/u.test(result.text));
  });
});
