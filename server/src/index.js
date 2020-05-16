const Koa = require('koa');
const IO = require('koa-socket-2');

const serve = require('koa-static');

const bodyParser = require('koa-bodyparser');
const router = require('./routes');


const app = new Koa()
const io = new IO()

app.use( bodyParser() );
app.use( router.middleware() );
app.use( serve('../../front/build') );

io.attach(app);

io.on('message', (ctx, data) => {
  console.log('client sent data to message endpoint', data);
});




app.listen(3000);
