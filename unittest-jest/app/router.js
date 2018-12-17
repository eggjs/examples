'use strict';

module.exports = app => {
  app.router.get('homepage', '/', 'home.index');
};
