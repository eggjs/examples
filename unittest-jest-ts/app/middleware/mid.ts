module.exports = () => {
  return async (ctx, next) => {
    ctx.mid = 'from middleware';
    await next();
  }
}