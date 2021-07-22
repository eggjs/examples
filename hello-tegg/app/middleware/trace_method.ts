import { EggContext, Next } from '@eggjs/tegg';

export async function traceMethod(ctx: EggContext, next: Next) {
  await next();
  ctx.body.data.message += ` (${ctx.method})`;
}
