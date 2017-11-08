'use strict';

const Controller = require('../core/controller');

class ApiController extends Controller {
  async successAction() {
    this.success({ foo: 'bar' });
  }

  async failAction() {
    this.fail('something wrong');
  }
}

module.exports = ApiController;
