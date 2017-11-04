'use strict';

module.exports = app => {
  return class ApiController extends app.Controller {
    async successAction() {
      this.success({ foo: 'bar' });
    }

    async failAction() {
      this.fail('something wrong');
    }
  };
};
