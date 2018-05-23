'use strict';

const { assert } = require('chai');
const { webpackHelper } = require('macaca-wd');

const { driver } = webpackHelper;

const shouldContains = (...substrs) => str => {
  substrs.forEach(substr => assert.include(str, substr));
};

const BASE_URL = 'http://127.0.0.1:7001'

describe('test/datahub.test.js', () => {

  describe('page func testing', () => {

    before(() => {
      return driver
        .initWindow({
          width: 1280,
          height: 800,
          deviceScaleFactor: 2
        });
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .switchAllScenes({
          hub: 'hackernews',
          pathname: 'getTopStories',
          scene: 'default',
        })
        .openReporter(true)
        .quit();
    });

    it('default render should be ok', async function () {
       return driver
        .switchScene({
          hub: 'hackernews',
          pathname: 'getTopStories',
          scene: 'default',
        })
        .getUrl(BASE_URL)
        .sleep(1000)
        .elementByCss('#wrapper > div.news-view.view.v-transition > div:nth-child(10) > span')
        .text()
        .then(shouldContains('10'))
        .sleep(1000);
    });

    it('list20 render should be ok', async function () {
      return driver
        .switchScene({
          hub: 'hackernews',
          pathname: 'getTopStories',
          scene: 'list20',
        })
        .getUrl(BASE_URL)
        .sleep(1000)
        .elementByCss('#wrapper > div.news-view.view.v-transition > div:nth-child(20) > span')
        .text()
        .then(shouldContains('20'))
        .sleep(1000);
    });

    it('list5 render should be ok', async function () {
      return driver
        .switchScene({
          hub: 'hackernews',
          pathname: 'getTopStories',
          scene: 'list5',
        })
        .getUrl(BASE_URL)
        .sleep(1000)
        .elementByCss('#wrapper > div.news-view.view.v-transition > div:nth-child(5) > span')
        .text()
        .then(shouldContains('5'))
        .sleep(1000);
    });
  });
});

