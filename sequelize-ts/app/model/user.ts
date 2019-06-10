'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
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

  return class extends User {
    static associate() {
      app.model.User.hasMany(app.model.Post, { as: 'posts' });
    }
  }
}