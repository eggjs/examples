'use strict';

module.exports = async function home() {
  // use service defined in framework
  const data = await this.service.test.get(123);
  await this.render('home.tpl', data);
};
