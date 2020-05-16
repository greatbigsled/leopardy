const mongoose = require('mongoose');
const { mongoConnectString } = require('../config');

mongoose.connect( mongoConnectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} );

module.exports = {
    mongoose
}
