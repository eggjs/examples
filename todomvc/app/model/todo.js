'use strict';

module.exports = (app, Model) => {
  class Todo extends Model {}

  return Todo;
};
