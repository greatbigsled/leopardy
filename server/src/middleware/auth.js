// Здесь нужно на каждом запросе проверять http-only куку пользователя
// и реагировать соответствующе
const uuid = require('uuid')


async function auth(ctx, next) {
  // проверяем наличие куки
  const sid = ctx.cookies.get('sid')
  console.log(`sid cookie = ${sid}`)

  if (!sid) {
    const generatedSid = uuid4()
    ctx.cookies.set('sid', generatedSid)
  }

  // если нет — user = null

  // если есть — нужно проверить и получить данные о юзере
  // переда

  await next();
}

module.exports = auth;
