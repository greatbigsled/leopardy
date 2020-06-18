const Router = require('koa-router')
const router = new Router()
const User = require('../db/models/User')
const Session = require('../db/models/Session')

async function handleRegistration(ctx, payload) {
  const { name, password } = payload

  const existingUser = await User.findOne({ name })

  if (existingUser) {
    ctx.status = 400
    ctx.body = {
      message: 'User with given name already exists'
    }

    return
  }

  const newSession = new Session({
    visits: 1
  })
  newSession.sid = newSession.generateSid()

  const session = await newSession.save()

  const newUser = new User({
    name,
    password,
    sid: session.sid
  })

  const saved = await newUser.save()

  ctx.status = 200
  ctx.body = {
    message: 'User succesfuly created'
  }

  return
}

async function handleLogin(ctx, payload) {
  const { name, password } = payload

  const existingUser = await User.findOne({ name })
  if (!existingUser) {
    ctx.status = 400
    ctx.body = {
      message: 'User with given name is not found'
    }

    return
  }

  const isPasswordCorrect =  existingUser.checkPassword(password)

  if (isPasswordCorrect) {
    ctx.status = 200
    ctx.body = {
      message: 'User successfuly logged in'
    }

    ctx.cookies.set('sid', existingUser.sid)
  } else {
    ctx.status = 400
    ctx.body = {
      message: 'Password is wrong'
    }
  }

  return
}

router.post('/', async (ctx, next) => {
  // allow only json data
  // check if body exists
  const payload = ctx.request.body
  const action = payload.action

  switch (action) {
    case 'register':
      await handleRegistration(ctx, payload)
      break
    case 'login':
      await  handleLogin(ctx, payload)
      break
    default:
      console.log(`Unknow auth action: ${action}, ignore it`)
      break
  }

  await next()
  console.log('next after /auth')
})

module.exports = router
