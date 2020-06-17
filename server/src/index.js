const Koa = require('koa')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('./middleware/session')
const auth = require('./middleware/auth')
const router = require('./routes')

const app = new Koa()

app.use( bodyParser({
  jsonLimit: '56kb'
}) )

app.use(session)
app.use(auth)


app.use( router.middleware() )
app.use( serve('../../front/build') )


const PORT = 3033

console.log(`Server is listenning on port: ${PORT}`)
app.listen(PORT)
