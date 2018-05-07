'use strict';

module.exports = {
  up: async function (db, Sequelize) {
    const { INTEGER, DATE, STRING } = Sequelize;

    await db.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
    await db.createTable('posts', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: STRING(30),
      content: STRING(255),
      user_id: {
        type: INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async function (db) {
    await db.dropTable('posts');
    await db.dropTable('users');
  },
};
