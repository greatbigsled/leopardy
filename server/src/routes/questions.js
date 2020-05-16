const QuestionModel = require('../db/models/Question');
const testQuestions = require('../db/testData/questions.json')

const Router = require('koa-router')
const router = new Router()

router.post( '/create', async (ctx, next) => {
    console.log(typeof testQuestions);
    console.log(testQuestions);

    const createRes = await Promise.all( testQuestions.items.map( it => QuestionModel.create(it) ) );

    console.log(createRes);

    return next();
} );



module.exports = router;
