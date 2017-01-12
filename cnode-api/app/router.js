'use strict';

module.exports = app => {
  app.resources('topic', '/api/v2/topics', 'topic');
};
