const { mongoose } = require('../index');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

const UserModel = mongoose.model('User', schema);

module.exports = UserModel;
