// Здесь нужно на каждом запросе проверять http-only куку пользователя
// и реагировать соответствующе
const User = require('../db/models/User')


async function auth(ctx, next) {
  // проверяем наличие куки
  const { sid } = ctx.session

  if (!sid) {
    throw new Error('Session id not found, something gone wrong')
  }

  const user = await User.findOne({ sid })
  if (user) {
    ctx.session.userId = user._id
  } else {
    ctx.session.userId = null
  }

  await next()
}

module.exports = auth
