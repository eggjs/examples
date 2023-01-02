module.exports = app => {
  const { Bone, DataTypes: { DATE, STRING, BOOLEAN } } = app.model;

  class Todo extends Bone {
    static table = 'todos';
    static attributes = {
      title: STRING(1000),
      createdAt: DATE,
      updatedAt: DATE,
      deletedAt: DATE,
      completed: BOOLEAN,
    };
  }

  return Todo;
};
