'use strict';

module.exports = app => (
  /**
   * Test Service
   */
  class Test extends app.Service {
    constructor(ctx) {
      super(ctx);
      this.config = this.app.config.test;
    }

    * get(id) {
      return { id, name: this.config.key };
    }
  }
);
