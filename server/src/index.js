const Koa = require('koa')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const auth = require('./middleware/auth')
const router = require('./routes')

const app = new Koa()

app.use( bodyParser({
  jsonLimit: '56kb'
}) )
app.use(async (ctx, next) => {
  const sid = ctx.cookies.get('sid')
  console.log(`sid cookie = ${sid}`)

  if (!sid) {
    const generatedSid = Math.random()
    ctx.cookies.set('sid', generatedSid, {
      // httpOnly:
    })
  }
})


app.use( router.middleware() )
app.use( serve('../../front/build') )


const PORT = 3033

console.log(`Server is listenning on port: ${PORT}`)
app.listen(PORT)
