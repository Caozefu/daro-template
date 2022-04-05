import * as Application from 'koa';
import { ExtendableContext, Next } from 'koa';

const cors = require('@koa/cors');
const koaBody = require('koa-bodyparser');
const Base = (app: Application) => {
  // CORS
  app.use(cors({ credentials: true }));

  app.use(koaBody());

  // x-response-time
  app.use(async (ctx: ExtendableContext, next: Next) => {
    const start = Date.now();
    await next();
    const ms: number = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
};

export default Base;
