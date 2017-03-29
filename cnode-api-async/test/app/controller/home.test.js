'use strict';

describe('test/app/controller/home.test.js', () => {
  it('should app auto init on setup.js', () => {
    // app is auto init at `test/.setup.js`
    assert(app);
    assert(mock);
    // mock alias
    assert(mm);
    assert(request);
  });

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });
});
