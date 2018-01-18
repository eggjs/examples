'use strict';
module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    user.photo = user.photo || 'https://zos.alipayobjects.com/rmsportal/JFKAMfmPehWfhBPdCjrw.svg';
    user.id = user.provider;
    user.displayName = user.displayName || user.name;
    return user;
  });
};
