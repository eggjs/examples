'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING(30),
      age: Sequelize.INTEGER,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }).then(() => {
      return queryInterface.createTable('posts', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: Sequelize.STRING(30),
        content: Sequelize.STRING(255),
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'cascade',
          onDelete: 'cascade',
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      });
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('posts').then(() => {
      queryInterface.dropTable('users');
    });
  },
};
