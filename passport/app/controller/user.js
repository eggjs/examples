'use strict';

exports.logout = async function() {
  this.logout();
  this.redirect(this.get('referer') || '/');
};
