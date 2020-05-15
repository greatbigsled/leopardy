const {Server} = require('http');

const Koa = require('koa');
const serve = require('koa-static');

const bodyParser = require('koa-bodyparser');
const router = require('./routes');


const app = new Koa()
const server = new Server(app.callback());

const io = require('socket.io')(server);

app.use( bodyParser() );
app.use( router.middleware() );
app.use( serve('../../front/build') );


// app.listen(3001, () => {
//   console.log('Server started');
// })




server.listen(3000, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  console.log('Server started');
});



io.on('connection', socket => {
  socket.on('start', (...a) => {
    console.log('start');
  });

  socket.on('message', ({from, message}) => {
    socket.broadcast.emit('message', {from, message})
  });
});








// const {Server} = require('http');

// const Koa = require('koa');
// const serve = require('koa-static');

// const app = new Koa();
// const server = new Server(app.callback());
// const io = require('socket.io')(server);

// app.use(serve('./public'));

// server.listen(3000, (err) => {
//   if (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
//   console.log('Server started');
// });

// io.on('connection', socket => {

//   socket.on('start', (...a) => {
//     console.log('start');
//   });

//   socket.on('message', ({from, message}) => {
//     socket.broadcast.emit('message', {from, message})
//   });


// });
