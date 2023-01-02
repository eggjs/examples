// init database here
module.exports = async app => {
  // sync database defines
  await app.model.sync();

  if (app.config.env === 'unittest') {
    await app.model.Todo.remove({}, true);
    await app.model.Todo.bulkCreate([
      { title: 'Read history of Node.js', completed: true },
      { title: 'Learn Koa', completed: true },
      { title: 'Star Egg', completed: false },
    ]);
    const rows = await app.model.Todo.findAll();
    console.log(rows);
  }
};
