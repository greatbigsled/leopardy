const Router = require('koa-router')
const questions = require('./questions')
const auth = require('./auth')

const router = new Router()

router.use('/auth', auth.routes(), auth.allowedMethods())
router.use('/questions', questions.middleware())

module.exports = router
