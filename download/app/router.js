'use strict';

module.exports = app => {
  app.get('/', 'index.index');
  app.get('/download', 'index.download');
  app.get('/download-image', 'index.downloadImage');
};
