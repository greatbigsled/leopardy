const Router = require('koa-router')
const router = new Router()

router.post('/', (ctx, next) => {
  // allow only json data
  // check if body exists
  const body = ctx.request.body
  const action = body.action

  switch (action) {
    case 'register':
      return handleRegistration(body)
      break
    case 'login':
      return handleLogin(body)
      break
    default:
      console.log(`Unknow auth action: ${action}, ignore it`)
      break
  }

  await next()
})

module.exports = router
