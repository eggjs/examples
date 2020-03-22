'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Model = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE(6),
    updated_at: DATE(6),
  });

  return class User extends Model {
    static associate() {
      app.model.User.hasMany(app.model.Post, { as: 'posts' });
    }
  }
}