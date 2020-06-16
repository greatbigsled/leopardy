const Router = require('koa-router')
const router = new Router()

router.get( '/v1', (ctx, next) => {
  console.log('aaaaaaaaaaaPPPII')
  console.log(ctx)

  return next()
} );

module.exports = router;
