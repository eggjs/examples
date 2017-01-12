'use strict';

module.exports = app => {
  app.get('/', 'home');
  app.post('/upload', 'upload');
};
