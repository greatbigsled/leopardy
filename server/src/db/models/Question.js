const { mongoose } = require('../index');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: String,
    theme: String,
    questions: [ { question: String, answer: String, price: Number } ]
});

const QuestionModel = mongoose.model('Question', schema);

module.exports = QuestionModel;
