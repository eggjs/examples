'use strict';

module.exports = app => {
  app.get('/', 'home');
  app.get('/foo', 'foo');
};
