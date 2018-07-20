'use strict';

exports.index = async ctx => {
  ctx.body = {
    message: 'index',
  };
};

exports.create = async ctx => {
  ctx.body = {
    data: ctx.params.data,
  };
};

exports.show = async ctx => {
  ctx.body = {
    id: ctx.params.id,
  };
};

exports.update = async ctx => {
  ctx.body = {
    id: ctx.params.id,
    data: ctx.params.data,
  };
};

exports.destroy = async ctx => {
  ctx.body = {
    id: ctx.params.id,
  };
};
