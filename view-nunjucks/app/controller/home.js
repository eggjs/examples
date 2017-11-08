'use strict';

module.exports = async function(ctx) {
  await ctx.render('home.html', {
    user: {
      name: 'foobar',
    },
    title: 'egg view example',
  });
};
