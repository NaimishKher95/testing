const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    sEmail: String,
    sPassword: String,
    sAuthToken: String
})

module.exports = mongoose.model('user', User)