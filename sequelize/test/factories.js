'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  app.factory = factory;
  factory.define('user', app.model.User, {
    name: factory.sequence('User.name', n => `name_${n}`),
    age: 18,
  });

  factory.define('post', app.model.Post, {
    title: factory.sequence('Post.title', n => `title_${n}`),
    content: factory.chance('sentence', { word: 5 }),
    user_id: factory.assoc('user', 'id'),
  });
};
