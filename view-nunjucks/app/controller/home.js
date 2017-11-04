'use strict';

module.exports = async function() {
  await this.render('home.html', {
    user: {
      name: 'foobar',
    },
    title: 'egg view example',
  });
};
