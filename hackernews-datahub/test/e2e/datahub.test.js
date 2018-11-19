'use strict';

const {
  driver,
  BASE_URL,
} = require('./helper');

// API Document: https://macacajs.github.io/macaca-wd/

describe('test/datahub.test.js', () => {

  describe('page func testing', () => {

    before(() => {
      return driver
        .initWindow({
          width: 800,
          height: 600,
          deviceScaleFactor: 2,
        });
    });

    afterEach(function() {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .switchAllScenes({
          hub: 'hackernews',
          pathname: 'topstories.json',
          scene: 'default',
        })
        .openReporter(true)
        .quit();
    });

    it('default render should be ok', async function() {
      return driver
        .switchScene({
          hub: 'hackernews',
          pathname: 'topstories.json',
          scene: 'default',
        })
        .getUrl(BASE_URL)
        .elementByCss('#wrapper > div.news-view.view.v-transition > div:nth-child(10) > span')
        .hasText('10');
    });

    it('list20 render should be ok', async function() {
      return driver
        .switchScene({
          hub: 'hackernews',
          pathname: 'topstories.json',
          scene: 'list20',
        })
        .getUrl(BASE_URL)
        .elementByCss('#wrapper > div.news-view.view.v-transition > div:nth-child(20) > span')
        .hasText('20');
    });

    it('list5 render should be ok', async function() {
      return driver
        .switchScene({
          hub: 'hackernews',
          pathname: 'topstories.json',
          scene: 'list5',
        })
        .getUrl(BASE_URL)
        .elementByCss('#wrapper > div.news-view.view.v-transition > div:nth-child(5) > span')
        .hasText('5');
    });

    it('list0 render should be empty', async function() {
      return driver
        .switchScene({
          hub: 'hackernews',
          pathname: 'topstories.json',
          scene: 'empty',
        })
        .getUrl(BASE_URL)
        .elementByCss('#wrapper > div.news-view.view.v-transition > p')
        .hasText('empty');
    });
  });
});

