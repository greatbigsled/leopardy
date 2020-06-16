const mongoose = require("mongoose")
const config = require("config")
const mongoConnectUrl = config.dbConfig.url

mongoose.set('debug', true)

mongoose.connect(mongoConnectUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 5,
  keepAlive: true
})

module.exports = {
  mongoose,
}
