describe('test/app.test.ts', () => {
  it('app should inject success', () => {
    expect(EggApp.fromCustomApp).toBe('from custom app');
    expect(!!EggApp.applicationShow()).toBe(true);
    expect(!!EggApp.config.urllib.keepAlive).toBe(true);
  });
});

