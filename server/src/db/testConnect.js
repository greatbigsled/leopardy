const config = require('config')

const mongoose = require('mongoose');
const User = require('./models/User')
const mongoConnectUrl = config.dbConfig.url

async function findBySid() {
  const res = await User.findOne({ sid: 'sanek-sidd' })
  console.log(res)
  console.log(typeof res)

}

findBySid()
