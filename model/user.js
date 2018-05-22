const _ = require("lodash");
const mongoose = require("mongoose");
const userShema = mongoose.Schema({
    name: String
});

const User = mongoose.model('User', userShema)

module.exports = User

