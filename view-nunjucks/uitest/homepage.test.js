'use strict';

const assert = require('assert');

const {
  driver,
  BASE_URL,
} = require('./helper');

describe('test/homepage.test.js', () => {
  describe('home page UI testing', () => {

    before(function() {
      this.timeout(5 * 1000);
      return driver
        .initWindow({
          width: 800,
          height: 600,
          deviceScaleFactor: 2,
        });
    });

    beforeEach(() => {
      return driver
        .getUrl(`${BASE_URL}`);
    });

    afterEach(function() {
      return driver
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('page render success', () => {
      return driver
        .setWindowSize(800, 600)
        .title()
        .then(title => {
          assert.equal(title, 'egg view example');
        })
        .source()
        .then(html => {
          assert.ok(html.includes('egg view example here, welcome foobar'));
        });
    });
  });
});
