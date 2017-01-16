'use strict';

module.exports = function* home() {
  // use service defined in framework
  const data = yield this.service.test.get(123);
  yield this.render('home.tpl', data);
};
