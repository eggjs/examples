'use strict';

module.exports = (app, Model) => {
  const { INTEGER, DATE, STRING, BOOLEAN } = Model.DataTypes;

  class Todo extends Model {}

  Todo.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(1000),
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE,
    completed: BOOLEAN,
  });

  return Todo;
};
