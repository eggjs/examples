'use strict';

module.exports = app => {
  app.router.get('/', 'home.render');
};
