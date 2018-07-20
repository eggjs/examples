'use strict'

exports.index = async ctx => {
  const { offset, limit, order_by, order } = ctx.query;
  const data = await ctx.service.user.list({
    offset,
    limit,
    order,
    order_by,
  })

  ctx.body = data;
};

exports.create = async ctx => {
  const newUser = ctx.params.data;
  const user = await ctx.service.user.create(newUser);
  ctx.body = user;
}

exports.show = async ctx => {
  const user = await ctx.service.user.find(ctx.params.id);
  ctx.body = user;
};

exports.update = async ctx => {
  const user = await ctx.service.user.update({
    id: ctx.params.id,
    updates: ctx.params.data
  });
  ctx.body = user;
}

exports.destroy = async ctx => {
  const data = await ctx.service.user.del(ctx.params.id);
  ctx.body = data
}