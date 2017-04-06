/**
 * Created by thram on 7/04/17.
 */
const Koa = require('koa');
const Router = require('koa-better-router');
const serve   = require('koa-static');
const app = new Koa();
const router = Router({ prefix: '/admin' }).loadMethods();


router.get('/', (ctx, next) => {
  ctx.body = 'Hello Koa';
});

app
  .use(serve(`${__dirname}/../public`))
  .use(router.middleware());

app.listen(3000);
