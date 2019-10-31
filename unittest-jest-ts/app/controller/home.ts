module.exports = async ctx => {
  const helper = ctx.helper = new ctx.app.Helper();
  ctx.body = [
    ctx.contextShow(),
    ctx.app.applicationShow(),
    ctx.request.requestShow(),
    ctx.response.responseShow(),
    ctx.app.agentShow(),
    ctx.helper.helperShow(),
    ctx.app.fromCustomApp,
    ctx.app.fromCustomAgent,
    ctx.app.config.test,
    ctx.app.config.testFromA,
    ctx.mid
  ].join(',');
}
