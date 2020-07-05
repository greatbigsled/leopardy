const { mongoose } = require('../db/index')
const User = require('../db/models/User')
const Session = require('../db/models/Session')

const initialUsers = [
  {
    name: 'admin',
    password: 'admin',
    sid: 'adming-sid',
  },
  {
    name: 'sanek',
    password: 'shforever',
    sid: 'sanek-sid',
  },
  {
    name: 'jenek',
    password: 'penek',
    sid: 'penek-sid',
  },
]

async function initSessions() {
  await Session.deleteMany({})
  console.log('Sessions deleted')

  const sessionsToInsert = initialUsers.map(
    (u) => new Session({ sid: u.sid, visits: 0 })
  )
  const res = await Promise.all(sessionsToInsert.map((u) => u.save()))
  console.log('Added initial sessions')
}

async function initUsers() {
  await User.deleteMany({})
  console.log('Users deleted')

  const usersToInsert = initialUsers.map((u) => new User(u))

  const res = await Promise.all(usersToInsert.map((u) => u.save()))
  console.log('Added initial users')
}

async function init() {
  await initSessions()
  await initUsers()

  mongoose.disconnect()
}

init()
