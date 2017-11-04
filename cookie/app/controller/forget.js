'use strict';

module.exports = async function() {
  this.cookies.set('remember', null);
  this.redirect('/');
};
