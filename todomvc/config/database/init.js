'use strict';

// init database here
module.exports = async app => {
  // sync database defines
  await app.model.sync();

  if (app.config.env === 'unittest') {
    await app.model.Todo.remove({}, true);
    await app.model.Todo.bulkCreate([
      { id: 1, title: 'Read history of Node.js', completed: true },
      { id: 2, title: 'Learn Koa', completed: true },
      { id: 3, title: 'Star Egg', completed: false },
    ]);
  }
};
