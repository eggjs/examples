'use strict';

module.exports = app => {
  return class ApiController extends app.Controller {
    * successAction() {
      this.success({ foo: 'bar' });
    }

    * failAction() {
      this.fail('something wrong');
    }
  };
};
