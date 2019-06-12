'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('posts', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(30),
      content: STRING(255),
      user_id: INTEGER,
      created_at: DATE(6),
      updated_at: DATE(6),
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('posts');
  },
};
