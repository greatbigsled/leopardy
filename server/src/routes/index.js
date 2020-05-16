const Router = require('koa-router');
const router = new Router();
const auth = require('./authentification');
const questions = require('./questions');

router.use( '/auth', auth.middleware() );
router.use( '/questions', questions.middleware() );

module.exports = router;
