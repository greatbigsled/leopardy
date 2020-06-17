const Session = require('../db/models/Session')
const { v4: uuid4 } = require('uuid')

function generateNewSessionObject() {
  const generatedSid = uuid4()

  const session = {
    sid: `sid-${generatedSid}`,
    visits: 1,
  }

  return session
}

async function session(ctx, next) {
  // проверяем наличие куки
  const sid = ctx.cookies.get('sid')
  console.log(`sid cookie = ${sid}`)

  const existingSession = sid && (await Session.findOne({ sid }))

  if (sid && existingSession) {
    ctx.session = {
      sid: existingSession.sid,
      visits: existingSession.visits,
    }

    await Session.findOneAndUpdate(
      { sid },
      { visits: existingSession.visits + 1 }
    )
  } else {
    const newSession = sid ? { sid, visits: 0 } : generateNewSessionObject()

    const dbSession = new Session(newSession)
    console.log({ dbSession })
    await dbSession.save()

    ctx.session = {
      sid: dbSession.sid,
      visits: dbSession.visits,
    }

    ctx.cookies.set('sid', dbSession.sid)
  }

  console.log(ctx.session)

  await next()
}

module.exports = session
