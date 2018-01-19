'use strict';
module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    user.photo = user.photo || 'https://zos.alipayobjects.com/rmsportal/JFKAMfmPehWfhBPdCjrw.svg';
    user.displayName = user.displayName || user.name;
    return user;
  });
};
