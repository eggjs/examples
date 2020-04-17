'use strict';

const { app } = require('egg-mock/bootstrap');

describe('__tests__/index.test.js', () => {
  it('should app exist', () => {
    expect(app.test).toBe('123');
  });
});
