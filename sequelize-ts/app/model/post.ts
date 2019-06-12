'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Post = app.model.define('post', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(30),
    content: STRING(255),
    user_id: INTEGER,
    created_at: DATE(6),
    updated_at: DATE(6),
  });

  return class extends Post {
    static associate() {
      app.model.Post.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
    }

    static async findByIdWithUser(id: number, userId: number) {
      return await this.findOne({
        where: { id, user_id: userId },
      });
    }
  }
}