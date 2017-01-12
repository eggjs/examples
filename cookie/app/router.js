'use strict';

module.exports = app => {
  app.get('/', 'home');
  app.get('/forget', 'forget');
  app.post('/remember', 'remember');
};
