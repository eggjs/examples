'use strict';

const mockUsers = [
  {
    name: 'fengmk2',
    home: 'HangZhou',
    url: 'https://fengmk2.com',
  },
];

const userDatabase = {
  * get(name) {
    for (const user of mockUsers) {
      if (user.name === name) {
        return user;
      }
    }
    return null;
  },
};

module.exports = app => {
  return class User extends app.Service {
    * get(name) {
      return yield userDatabase.get(name);
    }
  };
};
