'use strict';

module.exports = app => {
  return class Api extends app.Controller {
    index() {
      const { ctx, service } = this;
      ctx.body = {
        index: service.source.get('index'),
        lastUpdateBy: app.lastUpdateBy,
      };
    }
  };
};
