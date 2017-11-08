'use strict';

const Service = require('egg').Service;

const mockUsers = [
  {
    name: 'fengmk2',
    home: 'HangZhou',
    url: 'https://fengmk2.com',
  },
];

const userDatabase = {
  async get(name) {
    for (const user of mockUsers) {
      if (user.name === name) {
        return user;
      }
    }
    return null;
  },
};

class User extends Service {
  async get(name) {
    return userDatabase.get(name);
  }
}

module.exports = User;
