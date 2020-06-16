const { mongoose } = require("../db/index")
const User = require("../db/models/User")

async function initUsers() {
  await User.deleteMany({})
  console.log('Users deleted')

  const admin = new User({
    name: "admin",
    password: "admin",
  })
  const sanek = new User({
    name: "sanek",
    password: "shvorever",
  })
  const jenek = new User({
    name: "jenek",
    password: "penek",
  })

  const res = await Promise.all([admin.save(), sanek.save(), jenek.save()])
  console.log('Added initial users', res)
}

async function init() {
  await initUsers()

  mongoose.disconnect()
}

init()
