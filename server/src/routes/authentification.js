const Router = require('koa-router')
const router = new Router()

router.post( '/login', (ctx, next) => {
    console.log(ctx);
    return next();
} );

router.post( '/register', (ctx, next) => {
    console.log(ctx);
    return next();
} );

module.exports = router;
