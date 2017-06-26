'use strict';

module.exports = app => {
  app.get('/', 'home');
  app.get('/client', 'client');
  app.post('/upload', 'upload');
};
