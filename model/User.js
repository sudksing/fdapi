var mongoose = require('mongoose');
mongoose.Promise  = require('bluebird');
//var xml2js = Promise.promisifyAll(require("xml2js"));
//var parseStringAsync = xml2js.parseStringAsync;

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    email: String,

    firstName: String,

    lastName: String,

    passwordHash: String,

    passwordSalt: String

});

module.exports = mongoose.model('User', UserSchema);
