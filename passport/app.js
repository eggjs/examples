'use strict';
module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    user.photo = user.photo || 'https://zos.alipayobjects.com/rmsportal/JFKAMfmPehWfhBPdCjrw.svg';
    user.id = user.provider || 'local';
    user.displayName = user.displayName || user.name;
    return user;
  });
};
