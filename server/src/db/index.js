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

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Succesfuly connected to Mongo.db')
});


module.exports = {
  mongoose,
}
