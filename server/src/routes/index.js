const Router = require('koa-router');
const router = new Router();
const questions = require('./questions');

const api = require('./api')

router.use( '/questions', questions.middleware() );

router.use( '/api', api.middleware() )

module.exports = router;
