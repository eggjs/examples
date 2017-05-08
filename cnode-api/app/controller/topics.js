'use strict';

exports.show = function* () {
  this.body = yield this.service.topics.show({
    id: this.params.id,
    mdrender: this.query.mdrender !== 'false',
    accesstoken: this.query.accesstoken || '',
  });
};

exports.index = function* () {
  this.validate({
    page: { format: /\d+/, required: false },
    tab: { type: 'enum', values: [ 'ask', 'share', 'job', 'good' ], required: false },
    limit: { format: /\d+/, required: false },
  }, this.query);

  this.body = yield this.service.topics.list({
    page: this.query.page,
    tab: this.query.tab,
    limit: this.query.limit,
    mdrender: this.query.mdrender !== 'false',
  });
};

const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};

exports.create = function* () {
  this.validate(createRule);

  const id = yield this.service.topics.create(this.request.body);
  this.body = {
    topic_id: id,
  };
  this.status = 201;
};

exports.update = function* () {
  const id = this.params.id;
  this.validate(createRule);
  yield this.service.topics.update(Object.assign({ id }, this.request.body));
  this.status = 204;
};
